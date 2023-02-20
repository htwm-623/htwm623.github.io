---
title: npm升级file exists错误解决办法
urlname: grm1pg
date: '2021-09-29 23:30:10 +0800'
tags: []
categories:
  - 技术笔记
---

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1632929603645-897db8de-e2f7-4173-b40c-60c1675577a0.png#clientId=u4b641241-e50c-4&from=paste&height=179&id=u0fcf469b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=179&originWidth=761&originalType=binary∶=1&size=293846&status=done&style=none&taskId=u58c555fc-080d-4a79-a76b-2b857dc3752&width=761)
解决办法

1. 临时将原来文件夹下 npm.cmd npx.cmd npm npx 文件重命名为 npm1.cmd npx1.cmd npm1 npx1
1. 使用命令 `npm1 i -g npm` 重新安装 npm
1. 删除原来文件中 npm1.cmd npx1.cmd npm1 npx1
