#!/bin/bash
# ===== NAS 自动连接脚本 =====
# SMB 服务器信息
NAS_HOST="192.168.2.192"
NAS_PORT="445"
NAS_USER="wxc"
NAS_SHARE="cook-order-app"  # 共享文件夹名称
LOCAL_MOUNT="/Volumes/cook-order-app"

# 检查是否已挂载
if [ -d "$LOCAL_MOUNT" ]; then
    echo "✅ NAS 已挂载: $LOCAL_MOUNT"
    exit 0
fi

# 弹出密码输入对话框
PASSWORD=$(osascript -e 'tell app "System Events" to text returned of (display dialog "请输入 NAS 密码:" default answer "" with hidden answer buttons {"取消", "连接"} default button "连接")')

# 检查用户是否取消
if [ -z "$PASSWORD" ]; then
    echo "❌ 用户取消了输入密码"
    exit 1
fi

# 挂载 SMB 共享
echo "🔗 正在连接 NAS..."
mount_smbfs "//${NAS_USER}:${PASSWORD}@${NAS_HOST}/${NAS_SHARE}" "$LOCAL_MOUNT" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ NAS 连接成功: $LOCAL_MOUNT"
    # 打开 Finder 显示挂载的目录
    open "$LOCAL_MOUNT"
else
    echo "❌ 连接失败，请检查:"
    echo "   1. NAS 是否在线"
    echo "   2. 网络是否连接"
    echo "   3. 用户名密码是否正确"
    
    # 显示错误对话框
    osascript -e 'display dialog "NAS 连接失败！\n请检查网络和密码后重试." buttons {"确定"} default button "确定" with icon stop'
fi
