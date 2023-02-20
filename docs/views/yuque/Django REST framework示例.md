---
title: Django REST framework示例
urlname: ru8m7m
date: '2021-07-29 22:16:34 +0800'
tags:
  - django
categories:
  - 技术笔记
---

## 创建项目

1. 安装环境

```bash
# 1. 安装django
pip install django


# 2.安装 drf
pip install djangorestframework
pip install markdown       # Markdown support for the browsable API.
pip install django-filter  # Filtering support

```

2. 创建 django

```bash
# 1. 创建django项目
django-admin startproject drf_backend

# 2. 创建app
python manage.py startapp fileserver
```

## Hello World

1. `./project/urls.py`, 其中`helloapp`需要在 setting 中注册

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('file/', include('helloapp.urls')),
]
```

2. `./project/setting.py`

```python
INSTALLED_APPS = [
	...
    'helloapp',
    ...
]
```

3. `./helloapp/urls.py`

```python
from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.Hello.as_view())
]
```

4. `./helloapp/views.py`

```python
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class Hello(APIView):
    def get(self, request, format=None):
        data = {
            'hello': 'world'
        }
        return Response(data)
```

## 参考资料

- [drf 官网](https://www.django-rest-framework.org/)
