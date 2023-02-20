---
title: Python 包制作流程
urlname: kftqnl
date: '2021-05-17 20:41:19 +0800'
tags:
  - python
categories:
  - 技术笔记
---

## 创建 python 的包

1. 创建文件

```
├── LICENSE
├── my_module  # 包名
|  ├── code.py  # 实际代码
|  └── __init__.py  # 导出文件
└── setup.py # 安装配置文件
```

```python
# __init__.py
from .code import *
```

```python
# code.py
def hello ():
    return 'hello world'
```

2. 验证 setup 是否正确 `python setup.py check`
3. 源码安装 在当前文件夹执行`pip install .`即可， 然后就可以在 python 中使用

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621257017366-6deceec9-9f4e-4f37-9f81-b3dbc70f9aa1.png#clientId=u08eddfd7-7b60-4&from=paste&height=459&id=ub593829f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=459&originWidth=608&originalType=binary∶=1&size=107108&status=done&style=none&taskId=u169c99b0-c68a-43a6-85f0-b046be0778a&width=608)

## 将 python 包进行打包

1. 源码打包

- `python setup.py sdist`
- 打包完成后，会在顶层目录下生产 dist 和 egg 两个目录,
- dist 目录中有压缩包，可以直接执行 `pip install xxx.tar.gz`

2. whl 文件打包

- `pip wheel --wheel-dir={setup.py所在目录}/dist {setup.py所在目录}`
- 打包完成后会在 dist 中出现 `my_module-0.0.0-py3-none-any.whl` 文件
- 在任何地方使用 `pip install my_module-0.0.0-py3-none-any.whl` 即可

## 自定义包的卸载

1. 与通常包卸载一致`pip uninstall my_module`

示例代码地址 [https://github.com/htwm623/python-module-demo](https://github.com/htwm623/python-module-demo)
