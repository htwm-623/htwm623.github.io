---
title: docker简单使用
urlname: zokxhd
date: '2021-04-22 00:58:28 +0800'
tags:
  - docker
categories:
  - 技术笔记
---

- 练习网站 [play with docker](https://labs.play-with-docker.com/)， 使用 dockerid 登录此网站可以获取练习机器， 单次时长 4 小时，可重复申请

## 使用步骤

以 nginx 示例方式演示

1. 安装 参考 [docker 安装](https://yeasy.gitbook.io/docker_practice/install/ubuntu)
1. 拉取 nginx 镜像

```bash
docker pull nginx #实际等于 docker pull nginx:latest
```

3. 查看已经下载的镜像

```bash
docker images
```

4. 通过 run 指令运行

```bash
# 命令行运行
docker run nginx

# 后台加端口映射
docker run -d -p 80:80 nginx

# 目录绑定
docker run -d -p 9001:80 -v /home/htwm623/web/docker-test:/usr/share/nginx/html nginx

# 或者 注意--mount 之后三个参数type,source,target逗号之后不要加空格
docker run -d -p 9002:80 --mount type=bind,source=/home/htwm623/web/docker-test,target=/usr/share/nginx/html nginx
```

5. 通过 ps 指令查看正在运行的容器

```bash
docker ps
```

6. 进入容器内部修改容器及 exit 指令退出

```bash
# 进入容器内部
docker exec -it 容器id bash

# 退出容器内部
exit
```

7. 强制删除创建的容器

```bash
docker rm -f 容器id
```

8. 使用 commit 指令提交镜像

```bash
# docker commit 容器id 镜像命名
docker commit 92 m1
# 保存的镜像可以重新运行
```

9. dockerfile 使用

```bash
# 1. 创建dockerfile 内部语法省略
vim Dockerfile

# 2. 通过dockerfile构建镜像
docker build -t m2 . # 此处点为当前目录下Dockerfile m2为镜像名称

# 运行
docker run -d -p 100:80 m2
```

10. 将镜像导出和导入

```bash
# 镜像导出
docker save m2 > 1.tar # m2为镜像名称

# 镜像导入
docker load < 1.tar
```

记录于 2021 年 4 月 22 日

## 如何在 Dockerfile 中更换 pip 源

- 在 Dockerfile 中添加如下代码

```bash
RUN pip install -U pip
RUN pip config set global.index-url http://mirrors.aliyun.com/pypi/simple
RUN pip config set install.trusted-host mirrors.aliyun.com
```

学习视频来源 [10 分钟，快速学会 docker](https://www.bilibili.com/video/BV1R4411F7t9)
