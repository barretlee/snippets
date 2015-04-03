---
layout: page
title: Safari不认识type为search的input
tags: safari bug input[type=search]
---

我平时很少测试 safari 和 firefox，系统默认的浏览器被我设置成 chrome.

昨天切图看到个表单，没用人家写好的组件，那一层套一层的 div 看了就怕，因为不需要做什么扩展，就自己写了个。

```html
    <div>
      <input type="search" name="q" id="J_Query" />
    </div>
```

给 `J_Query` 写了一些样式，可是...Safari很任性的不认，左改右改搞了五六分钟没反应，火了！

把 type 改成 text 就好了。
