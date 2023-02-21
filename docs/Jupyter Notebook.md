---
title: Jupyter Notebook
urlname: bvq0kc
date: '2020-02-02 22:07:06 +0800'
tags:
  - python
categories:
  - 技术笔记
---

## java 内核安装

- 需要 java9 以上
- 参考[IJava](https://github.com/SpencerPark/IJava)

过程

1. 在 releases 下载安装包 名称如 ijava-1.3.0.zip
1. 解压至临时文件夹
1. 使用 python3 安装即可

```bash
# Pass the -h option to see the help page
python3 install.py -h

# Otherwise a common install command is
python3 install.py --sys-prefix
```

## javascript  内核安装

参考[ijavascript](https://github.com/n-riesco/ijavascript)

1. windows

```bash
pip3 install --upgrade pip
pip3 install jupyter
npm install -g ijavascript
ijsinstall
```

2. 正常运行  jupyter notebook  选择 node  的内核即可

## window 连接 linux 的 jupyter

1. 生成密码

在 ipython 中执行命令

```bash
from notebook.auth import passwd; passwd()
需要设置两次密码，
比如'sha1:-----------------------'，复制该字符串，之后需要用到
```

2. 生产 jupyter 配置文件

```bash
jupyter notebook --generate-config
```

3. 修改配置文件

```bash
vi ~/.jupyter/jupyter_notebook_config.py
```

    在最后追加

```bash
c.NotebookApp.ip = '*'
c.NotebookApp.password = u' sha1:-----' #这里就是上面的字符串
c.NotebookApp.port = 8000   # 这里的端口可以自己定义，是之后连接的时候需要设定的

```

4. 不开浏览器执行

```bash
jupyter notebook --no-browser
```

## 删除与增加 kernel

1. 查看内核位置

```bash
jupyter kernelspec list
```

2. 删除内核

```bash
jupyter kernelspec remove kernelName
```

3. 增加 python 内核

```bash
conda activate kernelName

python -m ipykernel install --user --name z1 --display-name "kernelName"
```

## 参考资料

- [jupyter notebook 删除与增加 kernel](https://www.jianshu.com/p/1ab07dfef422)
