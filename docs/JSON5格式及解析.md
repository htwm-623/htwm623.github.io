---
title: JSON5格式及解析
urlname: grophc
date: '2021-08-06 23:11:53 +0800'
tags:
  - json
categories:
  - 技术笔记
---

## 什么是 JSON5

JSON5 数据交换格式 （JSON5） 是[JSON](https://tools.ietf.org/html/rfc7159)的超级集，旨在通过扩展其语法以包括[ECMAScript 5.1](https://www.ecma-international.org/ecma-262/5.1/)中的某些产品来缓解 JSON 的一些限制。
JSON5 仍然是 JavaScript 的严格子集，不添加任何新的数据类型，并且可以处理所有现有的 JSON 内容。
JSON5 简单示例

```json
{
  // comments
  "unquoted": "and you can quote me on that",
  "singleQuotes": "I can use \"double quotes\" here",
  "lineBreaks": "Look, Mom! \
No \\n's!",
  "hexadecimal": 0xdecaf,
  "leadingDecimalPoint": 0.8675309,
  "andTrailing": 8675309,
  "positiveSign": +1,
  "trailingComma": "in objects",
  "andIn": ["arrays"],
  "backwardsCompatible": "with JSON"
}
```

## 与 JSON 的主要区别

- 可以使用单引号或者双引号
- 允许多行注释和单行注释(包括行内注释)
- 对象关键字可以是符合 ECMAScript 5.1 标识符名， 可以不加引号
- 对象结尾， 数组结尾可以有多余的逗号
- 字符串可以换行
- 数字可是使用 16 进制，小数点，加号等

## 编辑器设置

### vscode 设置 JSON5

1. vscode 需要安装[JSON5 syntax](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-json5) 拓展

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1628271238751-9daf9e02-361b-429a-8490-cc6c54fe76e3.png#clientId=ue1974296-510e-4&from=paste&height=212&id=ufea1457d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=212&originWidth=641&originalType=binary∶=1&size=13780&status=done&style=none&taskId=u156ea018-d342-426f-a4ae-f9fd8fcbd3a&width=641)

2. 方式一： 直接将 JSON 文件后缀改为`.json5`
3. 方式二： JSON 文件打开后，在 vscode 右下角选择语言模式为 JSON5

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1628271503546-70617ffe-2031-470f-a754-87103da7637b.png#clientId=ue1974296-510e-4&from=paste&height=181&id=u42936009&margin=%5Bobject%20Object%5D&name=image.png&originHeight=181&originWidth=546&originalType=binary∶=1&size=18044&status=done&style=none&taskId=u92c0c4a3-d1ab-45bf-9a83-b635c7c9e9d&width=546)

### pycharm 设置 JSON5

1. 方式一： 直接将 JSON 文件后缀改为`.json5`
1. 方式二： 修改设置 settings => Editor => File Types => JSON5，在 JSON5 文件格式中添加`*.json`

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1628273868997-803c1875-6c55-4c0b-adfc-78e6f7133900.png#clientId=ue1974296-510e-4&from=paste&height=700&id=u84770422&margin=%5Bobject%20Object%5D&name=image.png&originHeight=700&originWidth=984&originalType=binary∶=1&size=87015&status=done&style=none&taskId=ub481874f-ec4f-4916-9d3a-da7155cef56&width=984)

## Python 解析 JSON5

- python 内置 json 无法解析 JSON5，需要安装第三方库[json5](https://pypi.org/project/json5/)
- 安装 `pip install json5`

```python
import json5 as json
with open('demo.json5', 'r', encoding='utf-8')as fr:
    content = fr.read()
print(json.loads(content))
```

输出
![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1628274056454-1d39dd2a-63e2-4f8a-bd0f-624744c63f40.png#clientId=ue1974296-510e-4&from=paste&height=189&id=u36a0a70b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=189&originWidth=862&originalType=binary∶=1&size=256243&status=done&style=none&taskId=u2cf6249f-9fea-42ac-8445-638284af591&width=862)

## nodejs 解析 JSON5 参考[json5.org](https://json5.org/)

## 参考资料

1. [pypi-json5](https://pypi.org/project/json5/)
1. [json5.org](https://json5.org/)
1. [pycharm 设置 json5](https://www.jetbrains.com/help/pycharm/json.html)
1. [github-json5](https://github.com/json5/json5)
1. [问题来源-未来会有什么格式会淘汰 json 吗(v2ex)](https://www.v2ex.com/t/794059#reply47)
1. [vscode-json5 插件](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-json5)
