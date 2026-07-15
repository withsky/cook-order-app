#!/bin/bash
# ===== NAS 自动连接脚本 =====
NAS_HOST="192.168.2.192"
NAS_USER="wxc"
NAS_MOUNT="/Volumes/MiShare-672694685"
TARGET_DIR="${NAS_MOUNT}/cook-order-app"

# 检查是否已挂载
if [ -d "$NAS_MOUNT" ]; then
    echo "✅ NAS 已挂载: $NAS_MOUNT"
    
    # 创建目标文件夹
    if [ ! -d "$TARGET_DIR" ]; then
        echo "📁 创建 cook-order-app 文件夹..."
        mkdir -p "$TARGET_DIR"
    fi
    
    open "$TARGET_DIR"
    exit 0
fi

# 弹出密码输入
PASSWORD=$(osascript -e '
tell application "System Events"
    set dialogResult to display dialog "请输入 NAS 连接密码:" default answer "" with hidden answer ¬
        buttons {"取消", "连接"} default button "连接" with title "🍳 男友私厨"
    return text returned of dialogResult
end tell
')

if [ -z "$PASSWORD" ]; then
    echo "❌ 用户取消了输入密码"
    exit 1
fi

echo "🔗 正在连接 NAS..."

# 使用 Finder 挂载
osascript <<EOF
tell application "Finder"
    try
        mount volume "smb://${NAS_USER}:${PASSWORD}@${NAS_HOST}/"
    on error errMsg
        display dialog "连接失败: " & errMsg buttons {"确定"} default button "确定" with icon stop
    end try
end tell
EOF

sleep 3

# 检查是否挂载成功
if [ -d "$NAS_MOUNT" ]; then
    echo "✅ NAS 连接成功: $NAS_MOUNT"
    
    # 创建目标文件夹
    if [ ! -d "$TARGET_DIR" ]; then
        mkdir -p "$TARGET_DIR"
    fi
    
    open "$TARGET_DIR"
else
    echo "❌ 连接失败"
    echo "请手动在 Finder 中连接: smb://${NAS_USER}@${NAS_HOST}"
fi
