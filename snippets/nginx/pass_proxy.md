---
title: Nginx 开启本地代理
---

```
worker_processes auto;
pid nginx/nginx.pid;

events {
    # 需要保留这一个段落，可以为空
}
http {
    access_log nginx/nginx.log;
    server {
        listen barret.m.taobao.com:80;
        location / {
            proxy_pass  http://127.0.0.1:3333/;
        }
    }
}
```

`package.json` 的 script 增加：

```
"nginx_start": "sudo nginx -p ${PWD} -c ${PWD}/nginx/nginx.conf",
"nginx_stop": "sudo nginx -p ${PWD} -c ${PWD}/nginx/nginx.conf -s stop",
"nginx_reload": "sudo nginx -p ${PWD} -c ${PWD}/nginx/nginx.conf -s reload"
```

`Attention`：在项目下增加一个 nginx 目录。
