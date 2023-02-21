---
title: 获取chrome浏览器cookies信息
urlname: vc4efv
date: '2022-01-24 23:39:01 +0800'
tags:
  - 爬虫
  - python
categories:
  - 技术笔记
---

## 使用 API 打开浏览器跳转至指定网址

本段代码旨在刷新 cookies 信息，如不需要可略过
本质是利用浏览器的可执行程序打开窗口
且打开后不能单独关闭窗口，要关闭只能通过进程杀浏览器

```python
import webbrowser
url = 'https://docs.python.org/'

# Open URL in a new tab, if a browser window is already open.
webbrowser.open_new_tab(url)
```

## python 解析 chrome 本地数据库

chrome 本地 cookies 数据库文件(sqlite)路径为
C:\Users\<用户>\AppData\Local\Google\Chrome\User Data\Default\Cookies
下段代码为解析 chrome 80+版本数据库信息

```python
import sqlite3
import urllib3
import os
import json

import sys
import base64
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes


urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


def dpapi_decrypt(encrypted):
    import ctypes
    import ctypes.wintypes

    class DATA_BLOB(ctypes.Structure):
        _fields_ = [('cbData', ctypes.wintypes.DWORD),
                    ('pbData', ctypes.POINTER(ctypes.c_char))]

    p = ctypes.create_string_buffer(encrypted, len(encrypted))
    blobin = DATA_BLOB(ctypes.sizeof(p), p)
    blobout = DATA_BLOB()
    retval = ctypes.windll.crypt32.CryptUnprotectData(
        ctypes.byref(blobin), None, None, None, None, 0, ctypes.byref(blobout))
    if not retval:
        raise ctypes.WinError()
    result = ctypes.string_at(blobout.pbData, blobout.cbData)
    ctypes.windll.kernel32.LocalFree(blobout.pbData)
    return result


def aes_decrypt(encrypted_txt):
    with open(os.path.join(os.environ['LOCALAPPDATA'],
                           r"Google\Chrome\User Data\Local State"), encoding='utf-8', mode="r") as f:
        jsn = json.loads(str(f.readline()))
    encoded_key = jsn["os_crypt"]["encrypted_key"]
    encrypted_key = base64.b64decode(encoded_key.encode())
    encrypted_key = encrypted_key[5:]
    key = dpapi_decrypt(encrypted_key)
    nonce = encrypted_txt[3:15]
    cipher = Cipher(algorithms.AES(key), None, backend=default_backend())
    cipher.mode = modes.GCM(nonce)
    decryptor = cipher.decryptor()
    return decryptor.update(encrypted_txt[15:])


def chrome_decrypt(encrypted_txt):
    if sys.platform == 'win32':
        try:
            if encrypted_txt[:4] == b'x01x00x00x00':
                decrypted_txt = dpapi_decrypt(encrypted_txt)
                return decrypted_txt.decode()
            elif encrypted_txt[:3] == b'v10':
                decrypted_txt = aes_decrypt(encrypted_txt)
                return decrypted_txt[:-16].decode()
        except WindowsError:
            return None
    else:
        raise WindowsError


def get_cookies_from_chrome(domain):
    sql = f'SELECT name, encrypted_value as value FROM cookies where host_key like "%{domain}%"'
    filename = os.path.join(os.environ['USERPROFILE'], r'AppData\Local\Google\Chrome\User Data\default\Cookies')
    con = sqlite3.connect(filename)
    con.row_factory = sqlite3.Row
    cur = con.cursor()
    cur.execute(sql)
    cookie = ''
    for row in cur:
        if row['value'] is not None:
            name = row['name']
            value = chrome_decrypt(row['value'])
            if value is not None:
                cookie += name + '=' + value + ';'
    return cookie


if __name__ == '__main__':
    domain = 'taobao.com'   # 目标网站域名
    cookie = get_cookies_from_chrome(domain)
    print(cookie)
```

## 参考资料

1. [python webbrowser 文档](https://docs.python.org/zh-cn/3/library/webbrowser.html)
1. [如何在 python3 chrome80+中解密 cookies](https://www.pythonf.cn/read/65224)
