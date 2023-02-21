---
title: win10常用软件安装
urlname: qbhmf0
date: '2021-01-02 17:49:06 +0800'
tags:
  - other
categories:
  - 技术笔记
---

## Typora

- 官网 [https://www.typora.io/](https://www.typora.io/)

## cmder

- 官网 [https://github.com/cmderdev/cmder](https://github.com/cmderdev/cmder)
- 将 cmder 添加至右键菜单
  1.  将 cmder 添加至环境变量
  1.  在 powershell 管理员中 执行如下命令

```bash
Cmder.exe /REGISTER ALL
```

## nvm-windows

1. 从官网 [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows) 下载安装包安装 nvm
1. 设置 node 及 npm 镜像

```bash
nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```

3. 安装 node

```bash
nvm list available
nvm install 14.15.3
```

4. 配置 npm 代理

```bash
npm config set registry https://mirrors.huaweicloud.com/repository/npm/
```

## yarn 安装

1. 安装

```bash
npm install --global yarn
```

2. 配置代理

```bash
yarn config set registry https://mirrors.huaweicloud.com/repository/npm/
```

## nvm-linux

1. 查看可用版本

```bash
nvm ls-remote
```

2. 从指定版本升级， 还需手动删除老版本

```bash
nvm install NEW_VERSION --reinstall-packages-from=OLD_VERSION
# 例如
nvm install 14.17.0 --reinstall-package-from=14.15.4

# nvm卸载版本
nvm uninstall 14.15.4


```

3. npm 清理缓存

```bash
npm cache clean -f
```

4. npm 升级

```bash
npm install -g npm
```

## miniconda

- 官网 [https://docs.conda.io/en/latest/miniconda.html](https://docs.conda.io/en/latest/miniconda.html)
- conda 镜像清华源 [https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/)
