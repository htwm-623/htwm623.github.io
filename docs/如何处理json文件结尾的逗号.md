---
title: 如何处理json文件结尾的逗号
urlname: vawzeq
date: '2020-10-13 00:44:03 +0800'
tags:
  - python
categories:
  - 技术笔记
---

# python 如何处理 json 文件结尾多余的逗号

问题描述, json 文件结尾是不允许使用逗号的

正确格式如下:

```json
{
  "key1": "value1",
  "key2": "value2"
}
```

但如果使用 json 作为配置文件时,人为输入可能如下

```json
{
  "key1": "value1",
  "key2": "value2"
}
```

在使用上述格式的文件时, json.loads 文件会报错
参考来源 [https://stackoverflow.com/questions/23705304/can-json-loads-ignore-trailing-commas](https://stackoverflow.com/questions/23705304/can-json-loads-ignore-trailing-commas)

## 方法一

使用 jsoncomment 包进行解析

```python
import json
from jsoncomment import JsonComment

with open(filename) as data_file:
    parser = JsonComment(json)
    data = parser.load(data_file)
```

缺陷 会从字符串中删除逗号 例如

```python
import json
from jsoncomment import JsonComment
string = '{"key1": "{my special value,}"}'
parser = JsonComment()
json_boj = parser.loads(string)
print(json_boj)
# {'key1': '{my special value}'}
# 原本值中的字符串逗号也被删除了
```

局限: 原本值中的字符串逗号也被删除了

## 方法二

先通过 python 将字符串进行 eval,同时 替换 null, true false 例如

```python
import ast, json

def clean_json(str):
  str = str.replace('null', 'None').replace('true', 'True').replace('false', 'False')
  return json.dumps(ast.literal_eval(str))
```

局限:

1. 会破坏原本字符串中包含 null, true, false
2. 即算使用 ast.literal_eval 也需要考虑一些安全性的问题

## 结论

- json 最好写对 ![](https://gw.alipayobjects.com/os/lib/twemoji/11.2.0/2/svg/1f602.svg#height=18&id=rOTsY&originHeight=150&originWidth=150&originalType=binary∶=1&status=done&style=none&width=18), 如果作为需要手动添加内容的配置文件,最好还是改格式把
