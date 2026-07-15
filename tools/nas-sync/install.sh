#!/bin/bash
# ===== 安装自动同步服务 =====

echo "🚀 安装男友私厨自动同步服务..."
echo ""

# 检查 gh CLI
if ! command -v gh &> /dev/null; then
    echo "❌ 需要安装 GitHub CLI"
    echo "   运行: brew install gh"
    exit 1
fi

# 检查 gh 登录状态
if ! gh auth status &> /dev/null; then
    echo "❌ 需要登录 GitHub"
    echo "   运行: gh auth login"
    exit 1
fi

# 复制 LaunchAgent
echo "📦 安装 LaunchAgent..."
cp "$(dirname "$0")/../LaunchAgents/com.cookorder.nas-sync.plist" ~/Library/LaunchAgents/

# 加载 LaunchAgent
echo "🔄 启动自动同步服务..."
launchctl unload ~/Library/LaunchAgents/com.cookorder.nas-sync.plist 2>/dev/null
launchctl load ~/Library/LaunchAgents/com.cookorder.nas-sync.plist

echo ""
echo "✅ 安装完成！"
echo ""
echo "📋 说明："
echo "   - 服务会自动在后台运行"
echo "   - 每 5 分钟检查一次 GitHub 新版本"
echo "   - 发现新版本会自动同步到 NAS"
echo "   - 查看日志: cat /tmp/nas-sync-daemon.log"
echo "   - 卸载服务: ./uninstall.sh"
echo ""
