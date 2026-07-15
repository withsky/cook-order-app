#!/bin/bash
# ===== 手动连接测试 =====
# 双击运行，输入密码测试连接

NAS_HOST="192.168.2.192"
NAS_USER="wxc"

echo "🔧 NAS 手动连接测试"
echo "========================"
echo ""

# 输入密码
echo "请输入 NAS 密码："
read -s -p "密码: " NAS_PASS
echo ""

if [ -z "$NAS_PASS" ]; then
    echo "❌ 密码不能为空"
    read -p "按回车退出..."
    exit 1
fi

# 测试挂载点
MOUNT_POINT="/Volumes/nas-test"
rm -rf "$MOUNT_POINT" 2>/dev/null
mkdir -p "$MOUNT_POINT"

echo ""
echo "🔗 测试连接..."

# 尝试挂载根目录
if mount_smbfs "//${NAS_USER}:${NAS_PASS}@${NAS_HOST}/" "$MOUNT_POINT" 2>&1; then
    echo "✅ 连接成功！"
    echo ""
    echo "📁 NAS 根目录内容："
    echo "------------------------"
    ls -la "$MOUNT_POINT" 2>/dev/null | grep -E "^d|total" | awk '{print "   " $NF}'
    echo "------------------------"
    echo ""
    
    # 检查 cook-order-app 是否存在
    if [ -d "$MOUNT_POINT/cook-order-app" ]; then
        echo "✅ 找到 cook-order-app 文件夹"
    else
        echo "⚠️  cook-order-app 文件夹不存在"
        echo "   将在正式连接时自动创建"
    fi
    
    echo ""
    echo "========================"
    echo "✅ 测试通过！"
    echo ""
    echo "现在可以运行同步脚本："
    echo "   ./sync-to-nas.sh"
    echo ""
    
    # 询问是否正式挂载
    echo "是否正式挂载到 /Volumes/cook-order-app？(y/n)"
    read -p "> " CONFIRM
    
    if [ "$CONFIRM" = "y" ] || [ "$CONFIRM" = "Y" ]; then
        umount "$MOUNT_POINT" 2>/dev/null
        rmdir "$MOUNT_POINT" 2>/dev/null
        
        FINAL_MOUNT="/Volumes/cook-order-app"
        mkdir -p "$FINAL_MOUNT"
        
        if mount_smbfs "//${NAS_USER}:${NAS_PASS}@${NAS_HOST}/" "$FINAL_MOUNT" 2>&1; then
            # 创建 cook-order-app 文件夹
            if [ ! -d "$FINAL_MOUNT/cook-order-app" ]; then
                mkdir -p "$FINAL_MOUNT/cook-order-app"
                echo "   已创建 cook-order-app 文件夹"
            fi
            
            echo ""
            echo "✅ 正式挂载成功！"
            echo "   挂载点: $FINAL_MOUNT/cook-order-app"
            open "$FINAL_MOUNT/cook-order-app"
        else
            echo "❌ 正式挂载失败"
        fi
    else
        umount "$MOUNT_POINT" 2>/dev/null
        rmdir "$MOUNT_POINT" 2>/dev/null
        echo "已取消"
    fi
else
    echo "❌ 连接失败"
    echo ""
    echo "可能的原因："
    echo "   1. 密码错误"
    echo "   2. NAS 没有开启 SMB"
    echo "   3. 网络问题"
    rmdir "$MOUNT_POINT" 2>/dev/null
fi

echo ""
read -p "按回车退出..."
