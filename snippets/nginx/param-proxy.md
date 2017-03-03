---
title: Nginx使用url参数做反射代理
---

```
server {
    server_name www.demo.com;
    listen 80;

    location / {
        # 配置默认ip
        set $default_ip 127.0.0.1;

        # 配置默认port
        set $default_port 8080;

        # 如果url中包含ip=x
        if ($request_uri ~* ip=(.+?)(&|$)) {
            set $default_ip $1;
        }

        # 如果url中包含port=1
        if ($request_uri ~* port=(\d+?)(&|$)) {
            set $default_port $1;
        }

        # 配置代理参数
        proxy_set_header Connection "";
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;

        # 代理
        proxy_pass http://$default_ip:$default_port;
    }
}
```

使用方式：

```
// 使用默认值
www.demo.com

// 使用配置ip
www.demo.com/?ip=127.0.0.1

// 使用配置port
www.demo.com/?port=88

// IP+port
www.demo.com/?port=88&ip=127.0.0.01
```
