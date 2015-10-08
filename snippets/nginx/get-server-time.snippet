---
title: Nginx配置接口，获取服务器时间，支持 jsonp
---

```
server {
  listen 80;
  server_name barretlee.com
  
  default_type: "text/html";
  error_page default;
  charset    off;
  gzip       off;
  beacon     off;
  
  location = /gettime {
    set $uri_param_cb "callback";
    if ($arg_callback ~ "(^[^/<>]+$)" ) {set $uri_param_cb $1; }
    return 200 "$uri_param_cb({\"time\":\"$unix_time\"})";
  }
}
```

使用方式：

```
//GET http://server_name/gettime
{
   "time": "1444284923"
}
```
