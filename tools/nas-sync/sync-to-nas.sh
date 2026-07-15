#!/bin/bash
# ===== 自动同步 GitHub Release 到 NAS =====
NAS_HOST="192.168.2.192"
NAS_USER="wxc"
NAS_MOUNT="/Volumes/MiShare-672694685"
TARGET_DIR="${NAS_MOUNT}/cook-order-app"
GITHUB_REPO="withsky/cook-order-app"
DOWNLOAD_DIR="/tmp/nas-sync"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${YELLOW}========================================${NC}"
echo -e "${YELLOW}   男友私厨 - NAS 自动同步工具${NC}"
echo -e "${YELLOW}========================================${NC}"
echo ""

# 检查 NAS 是否挂载
if [ ! -d "$NAS_MOUNT" ]; then
    echo -e "${RED}❌ NAS 未挂载，正在尝试连接...${NC}"
    bash "$(dirname "$0")/connect-nas.sh"
    sleep 3
    
    if [ ! -d "$NAS_MOUNT" ]; then
        echo -e "${RED}❌ NAS 连接失败${NC}"
        echo "请先在 Finder 中手动连接: smb://${NAS_USER}@${NAS_HOST}"
        exit 1
    fi
fi

echo -e "${GREEN}✅ NAS 已连接: $NAS_MOUNT${NC}"

# 创建目标文件夹
if [ ! -d "$TARGET_DIR" ]; then
    echo -e "${YELLOW}📁 创建 cook-order-app 文件夹...${NC}"
    mkdir -p "$TARGET_DIR"
fi

# 检查 gh CLI
export PATH="$HOME/bin:$PATH"
if ! command -v gh &> /dev/null; then
    echo -e "${RED}❌ 需要安装 GitHub CLI: brew install gh${NC}"
    exit 1
fi

if ! gh auth status &> /dev/null; then
    echo -e "${RED}❌ 需要登录 GitHub: gh auth login${NC}"
    exit 1
fi

# 获取最新版本
echo -e "${YELLOW}📡 获取最新版本...${NC}"
TAG=$(gh release list --repo "$GITHUB_REPO" --limit 1 --json tagName --jq '.[0].tagName' 2>/dev/null)
NAME=$(gh release list --repo "$GITHUB_REPO" --limit 1 --json name --jq '.[0].name' 2>/dev/null)

if [ -z "$TAG" ]; then
    echo -e "${RED}❌ 无法获取版本信息${NC}"
    exit 1
fi

echo -e "${GREEN}📦 最新版本: ${NAME} (${TAG})${NC}"
echo ""

# 下载 APK
echo -e "${YELLOW}⬇️  下载 APK...${NC}"
mkdir -p "$DOWNLOAD_DIR"
gh release download "$TAG" --repo "$GITHUB_REPO" --pattern "*.apk" --dir "$DOWNLOAD_DIR" --clobber 2>/dev/null

DOWNLOADED_APK=$(find "$DOWNLOAD_DIR" -name "*.apk" -type f | head -1)

if [ -z "$DOWNLOADED_APK" ]; then
    echo -e "${RED}❌ 下载失败${NC}"
    rm -rf "$DOWNLOAD_DIR"
    exit 1
fi

echo -e "${GREEN}✅ 下载完成${NC}"
echo ""

# 复制到 NAS
echo -e "${YELLOW}📁 同步到 NAS...${NC}"
VERSION_DIR="${TARGET_DIR}/${TAG}"
mkdir -p "$VERSION_DIR"
cp "$DOWNLOADED_APK" "$VERSION_DIR/"
cp "$DOWNLOADED_APK" "${TARGET_DIR}/latest.apk"

# 清理旧版本（保留最新 5 个）
echo -e "${YELLOW}🧹 清理旧版本...${NC}"
cd "$TARGET_DIR"
ls -d */ 2>/dev/null | sort -r | tail -n +6 | while read dir; do
    [ -d "$dir" ] && rm -rf "$dir" && echo "   删除: $dir"
done

# 清理
rm -rf "$DOWNLOAD_DIR"

# 结果
echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}   ✅ 同步完成！${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "📦 版本: ${YELLOW}${NAME}${NC}"
echo -e "📁 位置: ${YELLOW}${TARGET_DIR}/${TAG}${NC}"
echo -e "🔗 最新: ${YELLOW}${TARGET_DIR}/latest.apk${NC}"
echo ""

# 显示目录内容
echo -e "${YELLOW}📂 NAS 目录内容：${NC}"
ls -la "$TARGET_DIR" 2>/dev/null | grep -E "^d|\.apk$" | awk '{print "   " $NF}'
echo ""

open "$TARGET_DIR"
