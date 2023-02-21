---
title: BS4解析HTML元素
urlname: sf5m94
date: '2022-05-10 00:28:38 +0800'
tags:
  - bs4
  - python
categories:
  - 技术笔记
---

## 环境安装

1. 安装 bs4 `pip install beautifulsoup4`
1. 安装解析器 `pip install html5lib`

## 示例代码

```python
from bs4 import BeautifulSoup
import os
file_path = r'1.html'
with open(file_path, encoding='utf-8') as fr:
    content = fr.read()
    soup = BeautifulSoup(content, 'html5lib')
target = soup.find('div', attrs={'class': 'post-content'})
```

其余以后再补
