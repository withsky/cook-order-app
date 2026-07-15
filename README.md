# 男友私厨 👨‍🍳

一个温馨的点餐小程序，让男友轻松掌握你的口味。

## 功能特性

- 🍳 **智能点餐** - 分类浏览、快速搜索、一键下单
- 📋 **订单管理** - 历史订单查看、订单统计
- 💬 **菜品评论** - 点评菜品、分享美食体验
- 📸 **图片保存** - 菜品图片上传与管理
- ⚙️ **菜单管理** - 自定义菜品、调整分类
- 🔔 **消息推送** - Server酱实时通知厨师

## 在线体验

访问 [男友私厨](https://wxc-one.github.io/cook-order-app/) 开始使用

## 下载 APK

前往 [Releases](https://github.com/wxc-one/cook-order-app/releases) 下载最新版本

## 技术栈

- HTML5 + CSS3 + Vanilla JavaScript
- localStorage + IndexedDB 本地存储
- Android WebView 封装

## 本地开发

```bash
# 克隆项目
git clone https://github.com/wxc-one/cook-order-app.git

# 启动本地服务器
cd web
python3 -m http.server 8080

# 访问 http://localhost:8080
```

## 构建 Android APK

```bash
cd android
./gradlew assembleDebug

# APK 位置: app/build/outputs/apk/debug/app-debug.apk
```

## 许可证

MIT License
