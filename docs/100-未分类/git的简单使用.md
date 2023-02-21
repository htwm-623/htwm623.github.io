---
title: git的简单使用
urlname: urnusp
date: '2021-05-14 00:54:59 +0800'
tags:
  - git
categories:
  - 技术笔记
---

## 查看提交记录 `git log`

1. `git log`

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621002987288-192d25a8-2da4-419a-a342-49c0ef78195c.png#clientId=u4c99844a-05bf-4&from=paste&height=184&id=u7b1eb9b1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=184&originWidth=554&originalType=binary∶=1&size=48488&status=done&style=none&taskId=u30eb6c4b-f8c8-45c4-9de4-f467980917b&width=554)

2. `git log -p` 详细显示

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621003220741-0f7155bf-8f03-4896-b42f-a5eb8e9b7fda.png#clientId=u4c99844a-05bf-4&from=paste&height=348&id=uf04e7b04&margin=%5Bobject%20Object%5D&name=image.png&originHeight=348&originWidth=536&originalType=binary∶=1&size=89507&status=done&style=none&taskId=u77235853-9d5b-42a6-8ec0-c5fb792d591&width=536)

3. `git log -oneline` 简单显示(常用)

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621003177638-ab3d8ec0-1b51-4b5f-8175-602843d7fbfe.png#clientId=u4c99844a-05bf-4&from=paste&height=54&id=u8a08b7e0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=54&originWidth=289&originalType=binary∶=1&size=11505&status=done&style=none&taskId=ue3e69ed6-ca53-4e32-9c19-9faa8f8277a&width=289)

## 状态修改 `checkout/reset/ restore`

1. 在修改文件之后, 未提交到索引区之前, 使用`git checkout`恢复文件

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621003633268-c20b2553-5d21-41d4-b9f8-d743a2d52fd6.png#clientId=u0e206b49-999f-4&from=paste&height=144&id=ua108f098&margin=%5Bobject%20Object%5D&name=image.png&originHeight=144&originWidth=587&originalType=binary∶=1&size=34282&status=done&style=none&taskId=u7f92fb04-e967-43bf-9dd7-292a1526edf&width=587)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621003895820-cd3065e5-f0df-476f-9484-07113c57fe55.png#clientId=u0e206b49-999f-4&from=paste&height=197&id=u85ef2831&margin=%5Bobject%20Object%5D&name=image.png&originHeight=197&originWidth=341&originalType=binary∶=1&size=27964&status=done&style=none&taskId=u1a8ab39f-8f87-4c8c-88a9-940645e92d5&width=341)

2. 已经提交至索引区的文件 使用 `git reset HEAD ` 撤销提交至索引状态

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621004093614-a5d48970-61da-479f-9f8f-ad204e391e74.png#clientId=u0e206b49-999f-4&from=paste&height=352&id=ua880d280&margin=%5Bobject%20Object%5D&name=image.png&originHeight=352&originWidth=588&originalType=binary∶=1&size=66661&status=done&style=none&taskId=u8f3483dc-45f7-4aeb-9c47-336871c0f28&width=588)

3. 使用 `git restore <file> / git restore --staged <file>` 分别从修改/索引区 撤销

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621006516980-ef69ada1-ff80-4b4f-99c0-d875a2a42602.png#clientId=u0e206b49-999f-4&from=paste&height=492&id=u334792a1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=492&originWidth=592&originalType=binary∶=1&size=82179&status=done&style=none&taskId=uda3954e0-277f-4e7d-a3fb-ad9af481490&width=592)

## 比较修改内容 `git diff`

1. 索引区之前比较 `git diff`

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621005879149-7158edd4-a67b-47f4-9b2c-a9a3f631f9c0.png#clientId=u0e206b49-999f-4&from=paste&height=150&id=u69faefc9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=150&originWidth=337&originalType=binary∶=1&size=20129&status=done&style=none&taskId=ufc4f4d64-708d-41b5-a2bf-3a7fe43fefa&width=337)

2. 加入索引区之后比较 `git diff --cached`

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621005997784-7f55788f-4d48-41d5-95a0-fab428073650.png#clientId=u0e206b49-999f-4&from=paste&height=148&id=u14f324ef&margin=%5Bobject%20Object%5D&name=image.png&originHeight=148&originWidth=339&originalType=binary∶=1&size=17833&status=done&style=none&taskId=u11182229-bbc9-4047-abec-f83eb0367b1&width=339)
​

## 文件操作 `mv/rm`

1. 文件重命名(提交到索引之后才能使用) `git mv`

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621006945514-492585ba-3f38-4fa3-8f2f-06b72e364355.png#clientId=u0e206b49-999f-4&from=paste&height=271&id=ud4e0e5d8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=271&originWidth=465&originalType=binary∶=1&size=36358&status=done&style=none&taskId=ue414d7ca-5c07-4b48-8999-eb4cd77ceac&width=465)

2. 文件从索引区删除 `git rm --cached`

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621007086043-c4a53776-bffa-4108-800f-802810339e31.png#clientId=u0e206b49-999f-4&from=paste&height=315&id=u73780de5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=315&originWidth=636&originalType=binary∶=1&size=101073&status=done&style=none&taskId=u55f7b90b-64f6-4586-b605-62456b436f9&width=636)

## 修改最后的提交 `commit --amend`

1. 将修改追加到最后一次 commit ，需要先将文件添加到索引区

​

## 返回过去版本

- 记得备份

1. reset

```bash
# 返回上一次提交
git reset --hard HEAD

# 返回HEAD -1 提交
git reset --hard HEAD~

# 返回上n次
git reset --hard HEAD~n

# 返回指定 提交， 可以来回跳
# git reset --hard <commitid>
git reset --hard 40400ea
```

2. reflog 查看现在位置，

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621009060959-583b65dd-db4b-4344-a4dc-3d4a6b4cc0a7.png#clientId=u0e206b49-999f-4&from=paste&height=499&id=u7abbd7ae&margin=%5Bobject%20Object%5D&name=image.png&originHeight=499&originWidth=557&originalType=binary∶=1&size=155990&status=done&style=none&taskId=u3a968039-ec2d-4dd8-b5d4-c6a276750ff&width=557)

## 合并分支

1. `git merge`

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621010415038-43fd0edc-1364-4f29-ba99-62a5f261e87c.png#clientId=u0e206b49-999f-4&from=paste&height=604&id=u97092600&margin=%5Bobject%20Object%5D&name=image.png&originHeight=604&originWidth=455&originalType=binary∶=1&size=92036&status=done&style=none&taskId=u15af9659-fe00-4942-b42e-9915683ef75&width=455)

2. `git branch -d [name]` 删除指定分支

## 分支冲突

1. 当不同分支修改同一文件，在合并分支时

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621011030192-d98e81e3-a0a8-4548-ad75-cd2d0e0bb3ae.png#clientId=u0e206b49-999f-4&from=paste&height=71&id=u5662a01d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=71&originWidth=551&originalType=binary∶=1&size=12730&status=done&style=none&taskId=u2e396458-9090-45c6-be61-9625d559a7e&width=551)

2. 解决合并冲突，尽量使用界面， 如 vscode

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621011388409-b6c247bb-b5b3-4061-9d70-3341d0806946.png#clientId=u0e206b49-999f-4&from=paste&height=190&id=u2c789a61&margin=%5Bobject%20Object%5D&name=image.png&originHeight=190&originWidth=618&originalType=binary∶=1&size=22434&status=done&style=none&taskId=uf85ad40b-3385-4ef8-abb9-2f7c8b62e59&width=618)

## 使用 tag 标签

1. `git tag` 查看所有 tag
1. `git tag v1.0.0` 给当前 commit 打标签

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621012198064-64c560b6-bd8f-47b7-85c2-9d0c414826d5.png#clientId=u0e206b49-999f-4&from=paste&height=65&id=u53469cbf&margin=%5Bobject%20Object%5D&name=image.png&originHeight=65&originWidth=358&originalType=binary∶=1&size=9609&status=done&style=none&taskId=ucbefbd48-e2ad-4f61-b23d-66a7e269662&width=358)

3. 使用 `git show [tag]` 查看 tag 版本信息

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621012380380-8c2017c5-6cc1-46dd-80dd-7635923f2881.png#clientId=u0e206b49-999f-4&from=paste&height=329&id=u7269e7db&margin=%5Bobject%20Object%5D&name=image.png&originHeight=329&originWidth=563&originalType=binary∶=1&size=59384&status=done&style=none&taskId=ucefa1ee7-7829-4a83-b396-34b08a858d4&width=563)

## 使用别名 alias

1. 将 checkout 设置别名 co

`git config --global alias.co checkout`
![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621012538721-7b5da373-b2e8-4cd5-991a-bd24ca6dde76.png#clientId=u0e206b49-999f-4&from=paste&height=166&id=u897e01dc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=166&originWidth=359&originalType=binary∶=1&size=23340&status=done&style=none&taskId=ucab777a7-163a-4e5f-8f2f-ac12b6cb057&width=359)

​
