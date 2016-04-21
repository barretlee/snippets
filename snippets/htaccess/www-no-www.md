---
title: 网址添加 www 或者删除 www
---

强制添加 www：

```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^your-site.com [NC]
RewriteRule ^(.*)$ http://www.your-site.com/$1 [L,R=301]
```

强制去除 www：

```
RewriteEngine On
RewriteCond %{HTTP_HOST} !^your-site.com$ [NC]
RewriteRule ^(.*)$ http://your-site.com/$1 [L,R=301]
```
