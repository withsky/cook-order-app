#!/bin/bash
# ===== NAS 自动连接脚本 =====
# SMB 服务器信息
NAS_HOST="192.168.2.192"
NAS_PORT="445"
NAS_USER="wxc"
LOCAL_MOUNT="/Volumes/cook-order-app"

# 检查是否已挂载
if [ -d "$LOCAL_MOUNT" ]; then
    echo "✅ NAS 已挂载: $LOCAL_MOUNT"
    open "$LOCAL_MOUNT"
    exit 0
fi

# 弹出密码输入对话框
PASSWORD=$(osascript -e '
tell application "System Events"
    set dialogResult to display dialog "请输入 NAS 连接密码:" default answer "" with hidden answer ¬
        buttons {"取消", "连接"} default button "连接" with title "🍳 男友私厨"
    return text returned of dialogResult
end tell
')

# 检查用户是否取消
if [ -z "$PASSWORD" ]; then
    echo "❌ 用户取消了输入密码"
    exit 1
fi

echo "🔗 正在连接 NAS..."

# 首先尝试直接挂载 cook-order-app 共享
echo "   尝试挂载 /cook-order-app..."
mount_smbfs "//${NAS_USER}:${PASSWORD}@${NAS_HOST}/cook-order-app" "$LOCAL_MOUNT" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ NAS 连接成功: $LOCAL_MOUNT"
    open "$LOCAL_MOUNT"
    exit 0
fi

# 如果失败，尝试挂载用户主目录
echo "   尝试挂载用户主目录..."
mount_smbfs "//${NAS_USER}:${PASSWORD}@${NAS_HOST}/${NAS_USER}" "$LOCAL_MOUNT" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ NAS 连接成功: $LOCAL_MOUNT (用户主目录)"
    
    # 检查是否有 cook-order-app 文件夹，没有则创建
    if [ ! -d "$LOCAL_MOUNT/cook-order-app" ]; then
        echo "   创建 cook-order-app 文件夹..."
        mkdir -p "$LOCAL_MOUNT/cook-order-app"
    fi
    
    open "$LOCAL_MOUNT/cook-order-app"
    exit 0
fi

# 如果都失败，尝试挂载根目录
echo "   尝试挂载根目录..."
mount_smbfs "//${NAS_USER}:${PASSWORD}@${NAS_HOST}/" "$LOCAL_MOUNT" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ NAS 连接成功: $LOCAL_MOUNT (根目录)"
    
    # 列出可用的共享
    echo ""
    echo "📁 可用的共享文件夹："
    ls -la "$LOCAL_MOUNT" 2>/dev/null | grep "^d" | awk '{print $NF}'
    
    # 检查是否有 cook-order-app
    if [ ! -d "$LOCAL_MOUNT/cook-order-app" ]; then
        echo ""
        echo "   创建 cook-order-app 文件夹..."
        mkdir -p "$LOCAL_MOUNT/cook-order-app"
    fi
    
    open "$LOCAL_MOUNT/cook-order-app"
    exit 0
fi

# 所有尝试都失败
echo "❌ 连接失败"
echo ""
echo "请手动连接："
echo "   1. 打开 Finder"
echo "   2. 按 Cmd+K"
echo "   3. 输入: smb://${NAS_USER}@${NAS_HOST}"
echo "   4. 输入密码"
echo "   5. 浏览到 cook-order-app 文件夹"

osascript -e 'display dialog "NAS 连接失败！\n\n请手动连接：\n1. Finder → Cmd+K\n2. 输入: smb://wxc@192.168.2.192\n3. 输入密码后浏览文件夹" buttons {"确定"} default button "确定" with icon stop with title "🍳 男友私厨"'
