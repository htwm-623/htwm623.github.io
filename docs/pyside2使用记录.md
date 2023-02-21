---
title: pyside2使用记录
urlname: vxo8z1
date: '2022-03-12 20:16:24 +0800'
tags: []
categories:
  - 技术笔记
---

- pyside2 和 pyqt5 基本一直， 主要区别在于 license

## 安装

```bash
pip install PySide2
```

## 将 ui 文件转换为 py 代码

1. 在 qt-design 中 选择 `窗体`->`View Python Code`

![image.png](https://cdn.nlark.com/yuque/0/2022/png/754067/1647087813401-4d763d77-6320-46b0-a306-3842e183b70c.png#clientId=u32c2e356-5dd6-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=387&id=ue52e1152&margin=%5Bobject%20Object%5D&name=image.png&originHeight=387&originWidth=364&originalType=binary∶=1&rotation=0&showTitle=false&size=49055&status=done&style=none&taskId=u630c5340-c930-4166-a41b-7ce04779af9&title=&width=364)

2. 或者直接使用命令行将保存的 ui 文件转为 py 代码

```bash
pyside2-uic untitled.ui -o ui.py
```

3. 在代码中引入 ui 文件
