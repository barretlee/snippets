---
title: Nginx配置iconfont字体支持跨域
---


### 使用location匹配

```
server {
    root /webserver;

    location ~* \.(eot|otf|ttf|woff|svg)$ {
        add_header Access-Control-Allow-Origin *;
    }
}
```

### 使用if判断匹配

```
server {
    root /webserver;

    location / {
        if ($document_uri ~ \.(eot|otf|ttf|woff|svg)$) {
            add_header Access-Control-Allow-Origin *;
        }
    }
}
```

- 其中的`*`指匹配任意域名, 也可以是指定的域名, 如: `http://barretlee.com`
- `eot|otf|ttf|woff|svg`表示匹配的字体文件