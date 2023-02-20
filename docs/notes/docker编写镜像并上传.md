---
title: docker编写镜像并上传
urlname: xzrciy
date: '2021-05-12 00:05:56 +0800'
tags:
  - docker
categories:
  - 技术笔记
---

## 1.编写简单 node.js 代码

```javascript
// hello.js
console.log("hello");
```

## 2. 编写 DockerFile 和编译镜像

1. 编写 DockerFile

```dockerfile
FROM node:latest

RUN mkdir /src

COPY hello.js /src

CMD ["node", "/src/hello.js"]
```

2. 编译镜像

```bash
# htwm623/hello-node为repository, v01为tag， 不要忘记最后 . 表示的相对路径
sudo docker image build -t htwm623/hello-node:v01 .
```

编译完成， 使用 docker images 查看镜像
![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1620750720956-49af2193-b528-4143-a9a0-5fddc9187dad.png#clientId=u7b4fe897-0ae9-4&from=paste&height=52&id=u4520c260&margin=%5Bobject%20Object%5D&name=image.png&originHeight=52&originWidth=670&originalType=binary∶=1&size=8109&status=done&style=none&taskId=u560e0a85-77d1-4536-895f-5cc86f3174f&width=670)

3. 运行镜像

```bash
docker run htwm623/hello-node:v01
# output: hello world
```

## 3. docker hub 云编译

1. 上传 Dockerfile 及项目文件到 GitHub
1. 在 docker hub 通过 github 仓库代码进行编译
1. 详细流程用到时再说
