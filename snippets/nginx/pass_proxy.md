---
title: Nginx 开启本地代理
---

本地目录结构：

```
├── nginx
│   ├── ca.crt
│   ├── ca.srl
│   ├── nginx.conf
│   ├── nginx.log
│   ├── server.crt
│   ├── server.csr
│   └── server.key
```

Nginx 配置：

```
worker_processes auto;
pid nginx.pid;

events {
    # 需要保留这一个段落，可以为空
}
http {
    access_log nginx.log;
    server {
        listen               80;
        listen               443 default ssl;
        server_name          barret.m.taobao.com;
        ssl_certificate      server.crt;
        ssl_certificate_key  server.key;
        location / {
            proxy_pass  http://127.0.0.1:3333/;
        }
    }
}
```

`package.json` 的 script 增加：

```
"nginx_start": "sudo nginx -p ${PWD}/nginx -c ${PWD}/nginx/nginx.conf",
"nginx_stop": "sudo nginx -p ${PWD}/nginx -c ${PWD}/nginx/nginx.conf -s stop",
"nginx_reload": "sudo nginx -p ${PWD}/nginx -c ${PWD}/nginx/nginx.conf -s reload"
```

`Attention`：在项目下增加一个 nginx 目录。

### 证书生成

1. 生成server.key

> $ openssl genrsa -des3 -out server.key 2048

以上命令是基于des3算法生成的rsa私钥，在生成私钥时必须输入至少4位的密码。

2. 生成无密码的server.key

> $ openssl rsa -in server.key -out server.key

3. 生成CA的crt

> $ openssl req -new -x509 -key server.key -out ca.crt -days 3650 

4. 基于ca.crt生成csr

> $ openssl req -new -key server.key -out server.csr

命令的执行过程中依次输入国家、省份、城市、公司、部门及邮箱等信息。

5. 生成crt（已认证）

> $ openssl x509 -req -days 3650 -in server.csr -CA ca.crt -CAkey server.key -CAcreateserial -out server.crt

