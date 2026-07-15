#!/bin/bash
# ===== 自动同步守护进程 =====
# 监控 GitHub Release 并自动同步到 NAS

GITHUB_REPO="withsky/cook-order-app"
LOCAL_MOUNT="/Volumes/cook-order-app"
CHECK_INTERVAL=300  # 5 分钟检查一次
LAST_SYNCED_FILE="/tmp/nas-last-synced"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# 读取上次同步的版本
getLastSynced() {
    if [ -f "$LAST_SYNCED_FILE" ]; then
        cat "$LAST_SYNCED_FILE"
    else
        echo ""
    fi
}

# 保存同步的版本
saveLastSynced() {
    echo "$1" > "$LAST_SYNCED_FILE"
}

# 检查并同步
checkAndSync() {
    # 检查 NAS 是否挂载
    if [ ! -d "$LOCAL_MOUNT" ]; then
        return 1
    fi
    
    # 获取最新版本
    LATEST_TAG=$(gh release list --repo "$GITHUB_REPO" --limit 1 --json tagName --jq '.[0].tagName' 2>/dev/null)
    
    if [ -z "$LATEST_TAG" ]; then
        return 1
    fi
    
    # 检查是否已同步
    LAST_SYNCED=$(getLastSynced)
    if [ "$LATEST_TAG" = "$LAST_SYNCED" ]; then
        return 0
    fi
    
    # 下载并同步
    log "📦 发现新版本: $LATEST_TAG"
    
    DOWNLOAD_DIR="/tmp/nas-sync-$$"
    mkdir -p "$DOWNLOAD_DIR"
    
    gh release download "$LATEST_TAG" --repo "$GITHUB_REPO" --pattern "*.apk" --dir "$DOWNLOAD_DIR" --clobber 2>/dev/null
    
    DOWNLOADED_APK=$(find "$DOWNLOAD_DIR" -name "*.apk" -type f | head -1)
    
    if [ -n "$DOWNLOADED_APK" ]; then
        VERSION_DIR="$LOCAL_MOUNT/$LATEST_TAG"
        mkdir -p "$VERSION_DIR"
        cp "$DOWNLOADED_APK" "$VERSION_DIR/"
        cp "$DOWNLOADED_APK" "$LOCAL_MOUNT/latest.apk"
        
        # 清理旧版本
        cd "$LOCAL_MOUNT"
        ls -d */ 2>/dev/null | sort -r | tail -n +6 | while read dir; do
            rm -rf "$dir"
        done
        
        saveLastSynced "$LATEST_TAG"
        log "✅ 同步完成: $LATEST_TAG"
        
        # 发送通知
        osascript -e "display notification \"新版本 $LATEST_TAG 已同步到 NAS\" with title \"🍳 男友私厨\" sound name \"Glass\""
    fi
    
    rm -rf "$DOWNLOAD_DIR"
}

# 主循环
log "🚀 自动同步守护进程启动"
log "📂 监控仓库: $GITHUB_REPO"
log "💾 同步目标: $LOCAL_MOUNT"
log "⏰ 检查间隔: ${CHECK_INTERVAL}秒"

while true; do
    checkAndSync
    sleep $CHECK_INTERVAL
done
