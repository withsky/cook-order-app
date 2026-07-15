#!/bin/bash
# ===== 卸载自动同步服务 =====

echo "🗑️  卸载男友私厨自动同步服务..."
echo ""

# 停止服务
echo "⏹️  停止服务..."
launchctl unload ~/Library/LaunchAgents/com.cookorder.nas-sync.plist 2>/dev/null

# 删除 LaunchAgent
echo "📦 删除 LaunchAgent..."
rm -f ~/Library/LaunchAgents/com.cookorder.nas-sync.plist

# 清理临时文件
echo "🧹 清理临时文件..."
rm -f /tmp/nas-last-synced
rm -f /tmp/nas-sync-daemon.log
rm -f /tmp/nas-sync-daemon.err

echo ""
echo "✅ 卸载完成！"
echo ""
echo "💡 提示："
echo "   - NAS 连接不会受影响"
echo "   - 已同步的文件仍保留在 NAS 上"
echo "   - 如需重新安装，运行 ./install.sh"
echo ""
