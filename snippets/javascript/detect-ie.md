---
title: 判断 IE 的一点奇技淫巧
---

不需要插入 DOM，也可以通过 getElementsByTagName 访问 DOM 的内容。

```
var isIE = function(){
    var b = document.createElement('b')
    b.innerHTML = '<!--[if IE]><i></i><![endif]-->'
    return b.getElementsByTagName('i').length === 1
};
```
