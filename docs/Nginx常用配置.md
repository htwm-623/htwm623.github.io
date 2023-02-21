---
title: Nginx常用配置
urlname: ngyg4w
date: '2021-09-07 22:03:26 +0800'
tags:
  - nginx
categories:
  - 技术笔记
---

## 插件版本 openresty

- openresty 是集成插件的 nginx， 本质就是 nginx
- [openresty download](https://openresty.org/cn/download.html)

下方示例中`echo` 为 openresty 插件功能

## 默认配置文件

1. 默认配置文件

```nginx
worker_processes  1;

events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    server {
        listen       80;
        server_name  localhost;
        location / {
            root   html;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}

```

## 参数解析

1. 文件类型

```nginx
# 默认类型 文件会直接下载
default_type  application/octet-stream;


# 可以修改为
default_type  text/html;

```

2. 路由匹配等级

```nginx
# 最弱匹配等级
location / {
  echo "hello nginx";
}

# 完全匹配 最高优先级
location = /a {
  echo "=/a";
}

# 次高优先级
location ^~ /a {
  echo "^~ /a";
}

# 第三优先级 正则表达式
location ~ /\w {
  echo "~ /\w";
}

```

同一优先级， 匹配程度较高的优先匹配， 匹配程度也一致，则写在前面的优先匹配

3. 反向代理

```nginx
location / {
  proxy_pass http://{{ip}}:{{port}};
}
```

4. 负载均衡

```nginx
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    upstream group1 {
    		#	 weight为权重
        server 192.168.0.12:80 weight=1;
        server 192.168.0.12:81 weight=10;
    }
    server {
        listen       80;
        server_name  localhost;

        default_type text/html;

        location / {
            proxy_pass http://group1/;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}

```

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1631030231653-b35a6bfb-7747-4f0a-8f06-e5fc0881b136.png#clientId=udc82e241-76bb-4&from=paste&height=510&id=u6b6b1ebe&margin=%5Bobject%20Object%5D&name=image.png&originHeight=510&originWidth=460&originalType=binary∶=1&size=49859&status=done&style=none&taskId=ufd54f44f-aa21-4ea8-91b8-c6cf3074a93&width=460)

## nginx 配置跨域

- nginx 支持正则，此处记录的均为\*

```nginx
add_header Access-Control-Allow-Origin *;
add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
```

## nginx 配置缓存

```nginx
add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";
```

## 参考资料

1. [openresty](https://openresty.org/cn/)
1. [ free-coder nginx 入门](https://www.bilibili.com/video/BV1Bx411Z7Do?spm_id_from=333.999.0.0)
