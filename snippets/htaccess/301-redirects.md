---
title: 301跳转
---

单页面：

```
Redirect 301 /oldpage.html http://www.yoursite.com/newpage.html
Redirect 301 /oldpage2.html http://www.yoursite.com/folder/
```

整站：

```
Redirect 301 / http://newsite.com/
```