---
title: win10本地开启samba服务
urlname: qferuu
date: '2021-10-17 18:54:46 +0800'
tags:
  - samba
categories:
  - 技术笔记
---

1. 在 windows 控制面板添加本地账户

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1634468329778-83cff5d6-c2b6-4edd-8189-90710907aec8.png#clientId=ua1b33399-3119-4&from=paste&height=279&id=u81f6da46&margin=%5Bobject%20Object%5D&name=image.png&originHeight=279&originWidth=848&originalType=binary∶=1&size=57576&status=done&style=none&taskId=u95be0f4e-c8b5-4f34-aa94-d1ea59bbd5d&width=848)

2. 右键共享想要共享的文件夹，共享用户选择刚刚创建的本地用户

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1634468432676-151dada2-7ba0-40ba-aa90-94f24a5ec320.png#clientId=ua1b33399-3119-4&from=paste&height=382&id=ue1e94983&margin=%5Bobject%20Object%5D&name=image.png&originHeight=382&originWidth=602&originalType=binary∶=1&size=28944&status=done&style=none&taskId=u549e28cb-f5a3-4c4e-ad77-1e84a2e2984&width=602)

3. 在其他电脑上使用创建的本地用户登录 samba 服务，即可访问共享的目录
