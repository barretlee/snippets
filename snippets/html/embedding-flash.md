---
title: 嵌入一个 flash
---

```html
<object type="application/x-shockwave-flash"
  data="your-flash-file.swf"
  width="0" height="0">
  <param name="movie" value="your-flash-file.swf" />
  <param name="quality" value="high"/>
</object>
```

`<embed>` 标签不是标准的 XHTML，不建议使用，并且它在 IE 下还有一些可怕的 bug。