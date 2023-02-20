---
title: vscode配置ssh remote
urlname: yrs9sq
date: '2021-10-27 23:33:03 +0800'
tags:
  - vscode
categories:
  - 技术笔记
---

## 安装 vscode 插件 remote-ssh

[Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1635349021782-691283ad-5f17-4c96-a063-47654a67a523.png#clientId=u1817e84d-dc0f-4&from=paste&height=338&id=u7e7ac38e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=338&originWidth=1175&originalType=binary∶=1&size=130610&status=done&style=none&taskId=u422db92b-ce2f-4b68-a773-a21e19c5937&width=1175)

## 使用 ssh 密钥登录远程服务器

因为使用密码登录下次登陆时需要重新输入密码

1. 使用 `ssh-keygen` 生成密钥

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1635349424245-8fbca88d-a0fd-4655-8236-65063b1ce872.png#clientId=u1817e84d-dc0f-4&from=paste&height=333&id=ue3decb26&margin=%5Bobject%20Object%5D&name=image.png&originHeight=333&originWidth=895&originalType=binary∶=1&size=730547&status=done&style=none&taskId=u6c7af919-6226-425e-a501-9fe362e83ba&width=895)
生成文件如下
![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1635349502459-0b5478bc-28f3-4f98-8c48-3c2586f71018.png#clientId=u1817e84d-dc0f-4&from=paste&height=265&id=ufe67e06c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=265&originWidth=756&originalType=binary∶=1&size=28115&status=done&style=none&taskId=u72bdaad5-5432-4b16-a586-056bbfd15e4&width=756)

2. 使用`cat`命令将公钥文件，添加到远程主机`authorized_keys` 文件中，默认目录 `~/.ssh/`

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1635349919453-170afa59-8364-439f-b1ef-40080d989b37.png#clientId=u1817e84d-dc0f-4&from=paste&height=108&id=u272abd4f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=108&originWidth=849&originalType=binary∶=1&size=18094&status=done&style=none&taskId=ua206d0b1-fc6f-472f-9a0a-864e0eb64a3&width=849)

3. vscode 添加配置文件

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1635350111312-5dcff8bf-716a-4e85-8d70-d8ca8cb1c4ff.png#clientId=u1817e84d-dc0f-4&from=paste&height=315&id=uf7e99abe&margin=%5Bobject%20Object%5D&name=image.png&originHeight=315&originWidth=354&originalType=binary∶=1&size=10904&status=done&style=none&taskId=uc53641d5-241a-4314-adbd-8972094de9b&width=354)

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1635350050034-d88cd369-29e7-4889-9e0b-8b381ef2cf0f.png#clientId=u1817e84d-dc0f-4&from=paste&height=300&id=uac15a9de&margin=%5Bobject%20Object%5D&name=image.png&originHeight=300&originWidth=1300&originalType=binary∶=1&size=93243&status=done&style=none&taskId=u46413613-1b5b-47bf-a00c-7c3bb3bc0dc&width=1300)
一般选择自己用户名下的配置文件即可
配置文件内容
![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1635350289792-09695d7c-7286-43d5-af64-d09952119612.png#clientId=u1817e84d-dc0f-4&from=paste&height=260&id=u253c6b5a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=260&originWidth=608&originalType=binary∶=1&size=30985&status=done&style=none&taskId=u570e95f4-02d8-4737-a31c-ecb142dba2b&width=608)

```yaml
Host 120.24.44.188
HostName 120.24.44.188
User htwm623
Port 24247
IdentityFile "C:\Users\htwm6\.ssh\120_24_44_188_id_rsa"
```

4. 点击主机名称右边图标即可连接

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1635350401167-d1aa714d-9cc3-4643-81c5-1840500927dc.png#clientId=u1817e84d-dc0f-4&from=paste&height=263&id=u4e8317a6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=263&originWidth=597&originalType=binary∶=1&size=29921&status=done&style=none&taskId=ue09b22e9-18f7-45fc-9f50-f106a9dd71e&width=597)
