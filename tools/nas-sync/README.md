# 🍳 男友私厨 - NAS 自动同步工具

## 📁 文件说明

| 文件 | 用途 |
|------|------|
| `连接NAS.app` | 双击连接 NAS（输入密码后挂载） |
| `sync-to-nas.sh` | 手动同步最新版本到 NAS |
| `auto-sync-daemon.sh` | 自动同步守护进程 |
| `connect-nas.sh` | 命令行连接 NAS |
| `install.sh` | 安装自动同步服务 |
| `uninstall.sh` | 卸载自动同步服务 |

## 🚀 快速开始

### 1. 首次连接 NAS

双击桌面上的 `连接NAS.app`，输入密码即可连接。

### 2. 手动同步版本

打开终端，运行：
```bash
cd ~/Desktop/NAS-AutoConnect
./sync-to-nas.sh
```

### 3. 安装自动同步

打开终端，运行：
```bash
cd ~/Desktop/NAS-AutoConnect
./install.sh
```

安装后，系统会每 5 分钟检查一次 GitHub 新版本并自动同步到 NAS。

### 4. 卸载自动同步

```bash
cd ~/Desktop/NAS-AutoConnect
./uninstall.sh
```

## 📂 NAS 目录结构

```
/Volumes/cook-order-app/
├── latest.apk          # 最新版本（始终指向最新）
├── v1.0.0/             # 版本文件夹
│   └── v1.0.0.apk
├── v1.0.1/
│   └── v1.0.1.apk
└── v1.1.0/
    └── v1.1.0.apk
```

## ⚙️ 配置

如需修改 NAS 信息，编辑 `connect-nas.sh` 中的变量：

```bash
NAS_HOST="192.168.2.192"    # NAS IP 地址
NAS_PORT="445"              # SMB 端口
NAS_USER="wxc"              # 用户名
NAS_SHARE="cook-order-app"  # 共享文件夹名
```

## 🔧 故障排除

### NAS 连接失败
1. 确认 NAS 在线且网络连接正常
2. 检查用户名密码是否正确
3. 确认 NAS 的 SMB 服务已开启

### 自动同步不工作
1. 检查 `gh` CLI 是否已安装：`gh --version`
2. 检查 GitHub 登录状态：`gh auth status`
3. 查看日志：`cat /tmp/nas-sync-daemon.log`

### 清除同步记录
```bash
rm /tmp/nas-last-synced
```

## 📱 Android 安装

1. 打开 NAS 上的 `latest.apk`
2. 或从版本文件夹中选择特定版本安装

## 🔄 更新日志

- v1.0.0: 初始版本
- v1.0.1: 修复 Server酱 推送
- v1.1.0: 添加精美主题系统
