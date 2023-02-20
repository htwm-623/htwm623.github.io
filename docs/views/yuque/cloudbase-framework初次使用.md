---
title: cloudbase-framework初次使用
urlname: efwymr
date: '2021-05-13 21:05:11 +0800'
tags:
  - serverless
categories:
  - 技术笔记
---

## 快速开始

1. 安装 cli

```bash
npm install -g @cloudbase/cli@latest
```

2. 初始化项目

```bash
cloudbase init
```

在初始化项目过程中, 首先会弹出网页进行登录,并开通 cloudbase
![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1620911297683-640a291a-f34f-48a3-84a3-6f93e58e8cdb.png#clientId=u38c46f3e-02e8-4&from=paste&height=398&id=u20ccc7d1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=398&originWidth=599&originalType=binary∶=1&size=23896&status=done&style=none&taskId=u79686a1a-65a9-4a0d-885e-aaad183c962&width=599)
之后选择需要的项目

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1620911547583-a4bf76d0-3ee6-4104-91db-ac8cbc34f647.png#clientId=u38c46f3e-02e8-4&from=paste&height=197&id=u9a24179e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=197&originWidth=656&originalType=binary∶=1&size=24991&status=done&style=none&taskId=u61fec8d7-1a5e-46d8-abe0-3d074a8d9d7&width=656)

3. 部署云函数

```bash
tcb fn deploy node-app
```

- 之后便可以选择访问路径 如 /hello
- [https://{在控制台查看的域名,或自定义域名}/hello](https://htwm623-cloudbase-2etw1ref8425e2-1257629794.ap-shanghai.app.tcloudbase.com/hello) 进行查看'

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1620913554419-89ec9e77-0905-4aac-b4c7-78ce385a2ee3.png#clientId=u38c46f3e-02e8-4&from=paste&height=488&id=u293aa7ee&margin=%5Bobject%20Object%5D&name=image.png&originHeight=488&originWidth=1357&originalType=binary∶=1&size=45618&status=done&style=none&taskId=u6eac40b7-1dd9-4797-ae4b-a99f3874b67&width=1357)
