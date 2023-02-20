---
title: 提升github代码拉取速度
urlname: xp8gmz
date: '2021-02-23 01:10:42 +0800'
tags:
  - other
categories:
  - 技术笔记
---

> 需要安装某不知名软件， 然后配置 git 代理
> 直接在窗口设置 http 代理未生效（可能是自己设置错误了）， 需要配置 git 的代理
> 我这边某软件区分了 http 端口和 socks 端口， 下方所有代理均用 socks 端口

## 1. https 代理

> 代理对 ssh 方式是不生效的

```bash
git config --global http.proxy socks5://127.0.0.1:4781
git config --global https.proxy socks5://127.0.0.1:4781
git config --global http.sslVerify false
```

## 2. ssh 方式

> 使用 ssh 方式需要修改 ssh 的 config 文件
> 路径为 C:\Users\{user}\.ssh\config
> 如果文件不存在创建即可， 在文件中写入如下内容,保存即可

```bash
Host github.com
  User git
  Port 22
  Hostname github.com
  IdentityFile "C:\Users\{user}\.ssh\id_rsa"
  ProxyCommand connect -S 127.0.0.1:4781 -a none %h %p
  TCPKeepAlive yes

Host ssh.github.com
  User git
  Port 443
  Hostname ssh.github.com
  IdentityFile "C:\Users\{user}\.ssh\id_rsa"
  ProxyCommand connect -S 127.0.0.1:4781 -a none %h %p
  TCPKeepAlive yes
```

## 参考链接

[https://v2ex.com/t/644874](https://v2ex.com/t/644874)
[https://www.jianshu.com/p/adf7cca269ac](https://www.jianshu.com/p/adf7cca269ac)
[https://misaka.im/index.php/archives/55/](https://misaka.im/index.php/archives/55/)
