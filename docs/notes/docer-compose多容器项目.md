---
title: docer-compose多容器项目
urlname: lus3o6
date: '2021-04-22 23:50:14 +0800'
tags:
  - docker
  - docker-compose
categories:
  - 技术笔记
---

## 1. 使用 docker --link 映射项目

使用 --link 参数映射容器和域名， 将两个容器进行通信，原理是修改 host 文件， 可查看 /etc/hosts

```bash
# 前一个myng 为另外一个容器的名称， 后一个为映射域名
docker run -dit --link myng:myng alpine
```

## 2. 使用 docker-compose

完整 demo 已上传 github
目录结构如下

```
├── conf
│   └── nginx.conf
├── docker-compose.yml
└── html
    ├── index.html
    ├── mysql.php
    └── test.php
```

1.  docker-compose.yml

```yaml
version: "3"
services:
	# 服务即为映射的域名
  nginx:
    image: nginx:alpine
    ports:
    - 81:80
    # volumes即为本地文件与容器内部文件映射
    volumes:
    - ./html:/usr/share/nginx/html
    - ./conf/nginx.conf:/etc/nginx/nginx.conf
  php:
    image: devilbox/php-fpm:5.5-work-0.123
    volumes:
    - ./html:/var/www/html
  mysql:
    image: mysql:5.6
    environment:
      - MYSQL_ROOT_PASSWORD=123456
```

2. conf/nginx.conf

```bash

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
            root   /usr/share/nginx/html;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /usr/share/nginx/html;
        }

        location ~ \.php$ {
            fastcgi_pass    php:9000;
            fastcgi_index   index.php;
            fastcgi_param   SCRIPT_FILENAME     /var/www/html/$fastcgi_script_name;
            include         fastcgi_params;
        }
    }
}

```

3. html/index.html

```html
index.html
```

4. html/test.php

```php
<?php
phpinfo();
```

5. html/mysql.php

```php
<?php
$dbhost = 'mysql';
$dbuser = 'root';
$dbpass = '123456';
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if (!$conn) {
	die('could not connect! ' . mysqi_error());
}
echo 'connect success! ';
mysqli_close($conn);

?>

```

6. 启动 docker-compose (docker-compose.yml 所在目录)

```bash
docker-compose up -d
```

7. 在浏览器中分别访问 如下链接进行验证

```bash
http://ip:port
http://ip:port/test.php
http://ip:port/mysql.php
```

## 3. docker-compose 常用命令

```bash
# 容器启动
docker-compose up

# 容器重新编译后启动
sudo docker-compose up --build

# 容器启动 后台启动
sudo docker-compose up -d --build

# 查询容器状态
sudo docker-compose ps

# 执行容器内的命令
sudo docker-compose run 容器名 top

# 查看容器输出日志
sudo docker-compose logs -f 容器名
sudo docker logs -f 标卷

# 容器停止
sudo docker-compose stop
# 容器停止+消除(容器+网络)
sudo docker-compose down
# 容器停止+消除(容器+网络+镜像)
sudo docker-compose down --rmi all
```
