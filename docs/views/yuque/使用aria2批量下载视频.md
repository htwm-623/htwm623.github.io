---
title: 使用aria2批量下载视频
urlname: fx37bz
date: '2021-03-10 00:37:57 +0800'
tags:
  - other
categories:
  - 技术笔记
---

# 安装

1. 从 github [https://github.com/aria2/aria2/releases](https://github.com/aria2/aria2/releases)下载 windows 版本

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1615308052951-18c39f01-5004-4aff-83d7-4f370afa9897.png#height=439&id=yFZUn&margin=%5Bobject%20Object%5D&name=image.png&originHeight=439&originWidth=1061&originalType=binary∶=1&size=42979&status=done&style=none&width=1061)

2. 解压到本地 配置环境变量
3. 执行如下命令, 即可在当前文件夹下下载 link 中的视频

```bash
 aria2c -i link.txt -j2
```
