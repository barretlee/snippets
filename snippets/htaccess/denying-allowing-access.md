---
title: 允许或者进制访问
---

允许某 IP 访问

```
Order deny,allow
Deny from All
Allow from xxx.xxx.xxx.xxx
Allow from xxx.xxx.xxx.xxy
```

禁止某特定 IP 访问

```
Order deny,allow
Allow from All
Deny from xxx.xxx.xxx.xxx
Deny from xxx.xxx.xxx.xxy
```