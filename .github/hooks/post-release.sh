#!/bin/bash
# ===== GitHub Release 后自动同步到 NAS =====
# 此脚本在每次发布新版本后自动运行

NAS_HOST="192.168.2.192"
NAS_USER="wxc"
NAS_SHARE="cook-order-app"
LOCAL_MOUNT="/Volumes/cook-order-app"
GITHUB_REPO="withsky/cook-order-app"
LOG_FILE="/tmp/nas-sync.log"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# 检查 NAS 是否挂载
if [ ! -d "$LOCAL_MOUNT" ]; then
    log "⚠️  NAS 未挂载，跳过同步"
    exit 0
fi

# 获取最新 Release
log "📡 检查最新版本..."
LATEST_TAG=$(gh release list --repo "$GITHUB_REPO" --limit 1 --json tagName --jq '.[0].tagName' 2>/dev/null)

if [ -z "$LATEST_TAG" ]; then
    log "❌ 无法获取最新版本"
    exit 1
fi

# 检查是否已同步
VERSION_DIR="$LOCAL_MOUNT/$LATEST_TAG"
if [ -d "$VERSION_DIR" ] && [ "$(ls -A $VERSION_DIR 2>/dev/null)" ]; then
    log "✅ 版本 $LATEST_TAG 已同步，跳过"
    exit 0
fi

# 下载 APK
log "⬇️  下载 $LATEST_TAG..."
DOWNLOAD_DIR="/tmp/nas-sync-$$"
mkdir -p "$DOWNLOAD_DIR"

gh release download "$LATEST_TAG" --repo "$GITHUB_REPO" --pattern "*.apk" --dir "$DOWNLOAD_DIR" --clobber 2>/dev/null

DOWNLOADED_APK=$(find "$DOWNLOAD_DIR" -name "*.apk" -type f | head -1)

if [ -z "$DOWNLOADED_APK" ]; then
    log "❌ 下载失败"
    rm -rf "$DOWNLOAD_DIR"
    exit 1
fi

# 同步到 NAS
log "📁 同步到 NAS..."
mkdir -p "$VERSION_DIR"
cp "$DOWNLOADED_APK" "$VERSION_DIR/"
cp "$DOWNLOADED_APK" "$LOCAL_MOUNT/latest.apk"

# 清理旧版本（保留最新 5 个）
cd "$LOCAL_MOUNT"
ls -d */ 2>/dev/null | sort -r | tail -n +6 | while read dir; do
    log "🗑️  删除旧版本: $dir"
    rm -rf "$dir"
done

# 清理
rm -rf "$DOWNLOAD_DIR"

log "✅ 同步完成: $LATEST_TAG"
