---
title: Python代码片段
urlname: chvfpy
date: '2021-12-10 20:53:50 +0800'
tags: []
categories:
  - 技术笔记
---

## python 多进程 pool

```python
from multiprocessing import Pool
import time

def func1(index):
    print(index)
    time.sleep(5)

 if __name__ == '__main__':
    pool = Pool(3)
    for i in range(10):
        pool.apply_async(func1, args=(i,))
    pool.close()
    pool.join()

```

##

## **python 拆解 url**

```javascript
from urllib.parse import urlparse, parse_qs

parsed = urlparse('http://localhost:8000/?name=xiaonming&token=hhh')
params = parse_qs(parsed.query)
```

![](https://cdn.nlark.com/yuque/0/2021/png/754067/1634954042714-7115ee8e-1a35-46b8-81c5-2db67bff6dd8.png#crop=0&crop=0&crop=1&crop=1&from=url&id=EkC4D&margin=%5Bobject%20Object%5D&originHeight=378&originWidth=1017&originalType=binary∶=1&rotation=0&showTitle=false&status=done&style=none&title=)
参考资料

- [python urllib.parse 解析 url](https://blog.csdn.net/xc_zhou/article/details/80907101)
- [python urllib.parse 文档](https://docs.python.org/3/library/urllib.parse.html)
