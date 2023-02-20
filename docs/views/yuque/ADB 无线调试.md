---
title: ADB 无线调试
urlname: vpwsgl
date: '2021-08-24 22:54:41 +0800'
tags:
  - android
categories:
  - 技术笔记
---

> 本文全文摘自 [https://blog.csdn.net/A0x01/article/details/99947041](https://blog.csdn.net/A0x01/article/details/99947041)， 此处仅为个人备份

## 1. 前提条件

1. 手机开启 USB 调试， 开启 网络 ADB 调试
1. 手机和电脑处于同一局域网下

## 2. 打开手机端口

1. 初次使用需要将手机和电脑连接起来在终端执行命令

```bash
adb tcpip 5555
# 说明： 端口可以不使用5555， 官方默认使用5555
```

## 3. 查看手机的 IP 地址

1. 方式一 执行如下命令

```bash
adb shell ifconfig wlan0
```

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1629819189058-75e91ed1-6240-4357-b83e-49c31f12b707.png#clientId=ufa2f8b4f-8642-4&from=paste&height=211&id=u1cc005b3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=211&originWidth=663&originalType=binary∶=1&size=251746&status=done&style=none&taskId=ud7c5dca3-8406-4994-b4c9-a1d66a20df5&width=663)
如图所示即为手机 ip

2. 方式 2

在手机设置里 `关于手机` -> `状态信息` -> 找到关于 ip 地址的信息

## 4. 连接手机

```bash
adb connect ip:port

# 如果port 是5555 则可以省略 直接执行
adb connect ip

```

如果没有成功， 可以尝试重启 adb 服务

```bash
# 停止adb服务
adb kill-server

# 开启adb服务
adb start-server
```

## 参考资料

- [ADB 与手机无线调试](https://blog.csdn.net/A0x01/article/details/99947041)
