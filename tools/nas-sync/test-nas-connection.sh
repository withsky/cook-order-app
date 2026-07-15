#!/bin/bash
# ===== NAS 连接测试脚本 =====

echo "🔧 NAS 连接诊断工具"
echo "========================"
echo ""

NAS_HOST="192.168.2.192"
NAS_USER="wxc"
NAS_SHARES=("cook-order-app" "share" "homes" "public" "NAS" "data" "storage")

# 1. 检查网络
echo "1️⃣  检查网络连接..."
if ping -c 1 -t 3 "$NAS_HOST" > /dev/null 2>&1; then
    echo "   ✅ NAS 在线 ($NAS_HOST)"
else
    echo "   ❌ NAS 不可达"
    exit 1
fi

# 2. 检查 SMB 端口
echo ""
echo "2️⃣  检查 SMB 端口..."
if nc -zv "$NAS_HOST" 445 2>&1 | grep -q "succeeded"; then
    echo "   ✅ SMB 端口正常 (445)"
else
    echo "   ❌ SMB 端口不可达"
    exit 1
fi

# 3. 输入密码
echo ""
echo "3️⃣  请输入 NAS 密码："
read -s -p "   密码: " NAS_PASS
echo ""

if [ -z "$NAS_PASS" ]; then
    echo "   ❌ 密码不能为空"
    exit 1
fi

# 4. 测试常见共享文件夹
echo ""
echo "4️⃣  测试共享文件夹..."
echo "   正在尝试以下共享名: ${NAS_SHARES[*]}"
echo ""

SUCCESS=false
for share in "${NAS_SHARES[@]}"; do
    echo -n "   测试 /$share ... "
    
    MOUNT_POINT="/Volumes/test-$share"
    
    # 尝试挂载
    if mount_smbfs "//${NAS_USER}:${NAS_PASS}@${NAS_HOST}/${share}" "$MOUNT_POINT" 2>/dev/null; then
        echo "✅ 成功！"
        echo ""
        echo "🎉 找到可用的共享文件夹: $share"
        echo "   挂载点: $MOUNT_POINT"
        
        # 显示目录内容
        echo ""
        echo "   📁 目录内容:"
        ls -la "$MOUNT_POINT" 2>/dev/null | head -10
        
        # 卸载测试挂载
        umount "$MOUNT_POINT" 2>/dev/null
        rmdir "$MOUNT_POINT" 2>/dev/null
        
        SUCCESS=true
        break
    else
        echo "❌ 失败"
    fi
done

echo ""
if [ "$SUCCESS" = false ]; then
    echo "❌ 所有共享文件夹测试失败"
    echo ""
    echo "可能的原因："
    echo "   1. 共享文件夹名称不正确"
    echo "   2. 用户名或密码错误"
    echo "   3. NAS 没有开启 SMB 服务"
    echo "   4. 防火墙阻止了连接"
    echo ""
    echo "请手动尝试："
    echo "   在 Finder 中按 Cmd+K，输入: smb://${NAS_USER}@${NAS_HOST}"
else
    echo "========================"
    echo "✅ 诊断完成"
    echo ""
    echo "请使用以下命令连接："
    echo "   mount_smbfs '//${NAS_USER}:${NAS_PASS}@${NAS_HOST}/$share' /Volumes/cook-order-app"
fi
