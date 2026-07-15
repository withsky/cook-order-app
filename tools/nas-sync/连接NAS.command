#!/bin/bash
# ===== 双击连接 NAS =====
# 将此文件放在桌面，双击即可连接 NAS

NAS_HOST="192.168.2.192"
NAS_USER="wxc"
NAS_SHARE="cook-order-app"
LOCAL_MOUNT="/Volumes/cook-order-app"

# 检查是否已挂载
if [ -d "$LOCAL_MOUNT" ]; then
    osascript -e 'display notification "NAS 已经连接" with title "男友私厨" sound name "Glass"'
    open "$LOCAL_MOUNT"
    exit 0
fi

# 弹出密码输入
PASSWORD=$(osascript -e 'tell app "System Events" to text returned of (display dialog "请输入 NAS 密码:" default answer "" with hidden answer buttons {"取消", "连接"} default button "连接")')

if [ -z "$PASSWORD" ]; then
    exit 1
fi

# 挂载
mount_smbfs "//${NAS_USER}:${PASSWORD}@${NAS_HOST}/${NAS_SHARE}" "$LOCAL_MOUNT" 2>/dev/null

if [ $? -eq 0 ]; then
    osascript -e 'display notification "NAS 连接成功！" with title "男友私厨" sound name "Glass"'
    open "$LOCAL_MOUNT"
else
    osascript -e 'display dialog "连接失败！请检查网络和密码。" buttons {"确定"} default button "确定" with icon stop'
fi
