#!/bin/bash
# ===== 自动同步 GitHub Release 到 NAS =====

NAS_HOST="192.168.2.192"
NAS_USER="wxc"
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
echo ""

# 检查 NAS 是否挂载
if [ ! -d "$LOCAL_MOUNT" ]; then
    echo -e "${RED}❌ NAS 未挂载，正在尝试连接...${NC}"
    bash "$(dirname "$0")/connect-nas.sh"
    sleep 3
    
    if [ ! -d "$LOCAL_MOUNT" ]; then
        echo -e "${RED}❌ NAS 连接失败${NC}"
        echo ""
        echo "请手动挂载 NAS 后再运行此脚本"
        exit 1
    fi
fi

echo -e "${GREEN}✅ NAS 已连接: $LOCAL_MOUNT${NC}"
echo ""

# 检查 gh CLI
if ! command -v gh &> /dev/null; then
    echo -e "${RED}❌ 需要安装 GitHub CLI${NC}"
    echo "   运行: brew install gh"
    exit 1
fi

# 检查 gh 登录状态
if ! gh auth status &> /dev/null; then
    echo -e "${RED}❌ 需要登录 GitHub${NC}"
    echo "   运行: gh auth login"
    exit 1
fi

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
echo ""

# 创建临时目录
mkdir -p "$DOWNLOAD_DIR"

# 下载 APK
echo -e "${YELLOW}⬇️  正在下载 APK...${NC}"
gh release download "$TAG" --repo "$GITHUB_REPO" --pattern "*.apk" --dir "$DOWNLOAD_DIR" --clobber 2>/dev/null

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ 下载失败${NC}"
    rm -rf "$DOWNLOAD_DIR"
    exit 1
fi

# 找到下载的 APK 文件
DOWNLOADED_APK=$(find "$DOWNLOAD_DIR" -name "*.apk" -type f | head -1)

if [ -z "$DOWNLOADED_APK" ]; then
    echo -e "${RED}❌ 未找到下载的 APK${NC}"
    rm -rf "$DOWNLOAD_DIR"
    exit 1
fi

echo -e "${GREEN}✅ APK 下载完成${NC}"
echo ""

# 在 NAS 上创建版本文件夹
VERSION_DIR="$LOCAL_MOUNT/$TAG"
echo -e "${YELLOW}📁 正在同步到 NAS...${NC}"
mkdir -p "$VERSION_DIR"

# 复制 APK 到 NAS
cp "$DOWNLOADED_APK" "$VERSION_DIR/"

# 同时保留一个 latest 文件
LATEST_FILE="$LOCAL_MOUNT/latest.apk"
rm -f "$LATEST_FILE"
cp "$DOWNLOADED_APK" "$LATEST_FILE"

# 清理旧版本（只保留最新的 5 个版本）
echo -e "${YELLOW}🧹 正在清理旧版本...${NC}"
cd "$LOCAL_MOUNT"
ls -d */ 2>/dev/null | sort -r | tail -n +6 | while read dir; do
    if [ -d "$dir" ]; then
        echo "   删除旧版本: $dir"
        rm -rf "$dir"
    fi
done

# 显示同步结果
echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}   ✅ 同步完成！${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "📦 版本: ${YELLOW}${NAME}${NC}"
echo -e "📁 位置: ${YELLOW}$VERSION_DIR${NC}"
echo -e "🔗 最新: ${YELLOW}$LATEST_FILE${NC}"
echo ""

# 显示 NAS 目录内容
echo -e "${YELLOW}📂 NAS 目录内容：${NC}"
ls -la "$LOCAL_MOUNT" 2>/dev/null | grep -E "^d|\.apk$" | awk '{print "   " $NF}'
echo ""

# 清理临时文件
rm -rf "$DOWNLOAD_DIR"

# 打开 NAS 目录
open "$LOCAL_MOUNT"
