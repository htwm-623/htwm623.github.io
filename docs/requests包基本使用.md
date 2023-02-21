---
title: requests包基本使用
urlname: hsb8uq
date: '2021-10-17 09:59:17 +0800'
tags:
  - python
categories:
  - 技术笔记
---

## 使用 cookie 访问网站

1. 复制请求中`header` 中 `cookie`的值存到本地 txt 文件中， 如`cookie.txt`

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1634436733779-d981f617-91b3-42f7-b91f-71ad73989ed3.png#clientId=uf0cea5d8-e1cc-4&from=paste&height=346&id=u1c988591&margin=%5Bobject%20Object%5D&name=image.png&originHeight=346&originWidth=1017&originalType=binary∶=1&size=65157&status=done&style=none&taskId=u1fbd9ee5-ca16-43bd-ae6b-1f97fc8af2c&width=1017)

2. 代码中使用

```python
import requests

cookies = {}
with open('cookie.txt', 'r', encoding='utf-8')as fr:
    content = fr.read()
for line in content.split(';'):
    name,value = line.strip().split('=',1)
    cookies[name]=value

url = 'https://www.baidu.com'
res = requests.get(url, cookies=cookies)

```

## 配置代理

```python
proxies = {
  'http': 'http://10.10.1.10:3128',
  'https': 'http://10.10.1.10:1080',
}
res = requests.get(url, proxies=proxies)
```

## 配置 headers

```python
headers = {
    'accept': 'bytesbytes',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'referer': 'https:/xxxx.com/',
    'sec-fetch-mode': 'cors',
    "sec-fetch-site": 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36 Edg/94.0.992.50'
}
res = requests.get(url, headers=headers)
```
