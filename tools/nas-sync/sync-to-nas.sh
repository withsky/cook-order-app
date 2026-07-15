#!/bin/bash
# ===== 自动同步 GitHub Release 到 NAS =====
# 此脚本会下载最新的 APK 并同步到 NAS

NAS_HOST="192.168.2.192"
NAS_USER="wxc"
NAS_SHARE="cook-order-app"
LOCAL_MOUNT="/Volumes/cook-order-app"
GITHUB_REPO="withsky/cook-order-app"
DOWNLOAD_DIR="/tmp/nas-sync"

# 颜色输出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${YELLOW}========================================${NC}"
echo -e "${YELLOW}   男友私厨 - NAS 自动同步工具${NC}"
echo -e "${YELLOW}========================================${NC}"

# 检查 NAS 是否挂载
if [ ! -d "$LOCAL_MOUNT" ]; then
    echo -e "${RED}❌ NAS 未挂载，正在尝试连接...${NC}"
    bash "$(dirname "$0")/connect-nas.sh"
    sleep 2
    
    if [ ! -d "$LOCAL_MOUNT" ]; then
        echo -e "${RED}❌ NAS 连接失败，请先手动连接${NC}"
        exit 1
    fi
fi

echo -e "${GREEN}✅ NAS 已连接${NC}"

# 创建临时目录
mkdir -p "$DOWNLOAD_DIR"

# 获取最新 Release 信息
echo -e "${YELLOW}📡 正在获取最新版本信息...${NC}"
RELEASE_INFO=$(gh release view --repo "$GITHUB_REPO" --json tagName,name,assets 2>/dev/null)

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ 无法获取 Release 信息${NC}"
    exit 1
fi

TAG=$(echo "$RELEASE_INFO" | grep -o '"tagName":"[^"]*"' | cut -d'"' -f4)
NAME=$(echo "$RELEASE_INFO" | grep -o '"name":"[^"]*"' | cut -d'"' -f4)

echo -e "${GREEN}📦 最新版本: ${NAME} (${TAG})${NC}"

# 查找 APK 资产
APK_URL=$(gh release view "$TAG" --repo "$GITHUB_REPO" --json assets --jq '.assets[] | select(.name | test("\\.apk$")) | .url' 2>/dev/null)

if [ -z "$APK_URL" ]; then
    echo -e "${RED}❌ 未找到 APK 文件${NC}"
    exit 1
fi

# 下载 APK
echo -e "${YELLOW}⬇️  正在下载 APK...${NC}"
APK_NAME="${TAG}.apk"
gh release download "$TAG" --repo "$GITHUB_REPO" --pattern "*.apk" --dir "$DOWNLOAD_DIR" --clobber 2>/dev/null

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ 下载失败${NC}"
    exit 1
fi

# 找到下载的 APK 文件
DOWNLOADED_APK=$(find "$DOWNLOAD_DIR" -name "*.apk" -type f | head -1)

if [ -z "$DOWNLOADED_APK" ]; then
    echo -e "${RED}❌ 未找到下载的 APK${NC}"
    exit 1
fi

echo -e "${GREEN}✅ APK 下载完成${NC}"

# 在 NAS 上创建版本文件夹
VERSION_DIR="$LOCAL_MOUNT/$TAG"
mkdir -p "$VERSION_DIR"

# 复制 APK 到 NAS
echo -e "${YELLOW}📁 正在同步到 NAS...${NC}"
cp "$DOWNLOADED_APK" "$VERSION_DIR/"

# 同时保留一个 latest 软链接
LATEST_LINK="$LOCAL_MOUNT/latest.apk"
rm -f "$LATEST_LINK"
cp "$DOWNLOADED_APK" "$LATEST_LINK"

# 清理旧版本（只保留最新的 3 个版本）
echo -e "${YELLOW}🧹 正在清理旧版本...${NC}"
cd "$LOCAL_MOUNT"
ls -d */ 2>/dev/null | sort -r | tail -n +4 | while read dir; do
    echo "   删除旧版本: $dir"
    rm -rf "$dir"
done

# 显示同步结果
echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}   ✅ 同步完成！${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "📦 版本: ${YELLOW}${NAME}${NC}"
echo -e "📁 位置: ${YELLOW}$VERSION_DIR${NC}"
echo -e "🔗 最新: ${YELLOW}$LATEST_LINK${NC}"
echo ""

# 清理临时文件
rm -rf "$DOWNLOAD_DIR"

# 打开 NAS 目录
open "$LOCAL_MOUNT"
