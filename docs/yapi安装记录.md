---
title: yapi安装记录
urlname: ltohof
date: '2021-05-26 23:20:45 +0800'
tags:
  - api
categories:
  - 技术笔记
---

## 安装 yapi-cli

1. yapi 更新不频繁，如果安装过程中出现问题，可以选择低版本 nodejs

```bash
npm install -g yapi-cli --registry https://registry.npm.taobao.org
yapi server
```

2. 按照提示在可视界面完成配置
3. 安装 pm2 并启动 yapi

```bash
npm install pm2 -g
cd  {项目目录}
pm2 start "vendors/server/app.js" --name yapi //pm2管理yapi服务
pm2 info yapi //查看服务信息
pm2 stop yapi //停止服务
pm2 restart yapi //重启服务

```

4. 如果 pm2 报错， 可以选择直接使用 node 运行

```bash
node vendors/server/app.js
```
