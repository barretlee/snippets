---
title: 检测字体是否加载
---

```
function checkFont(strFamily) {
  var objDiv = document.createElement('div');

  objDiv.style.fontFamily = strFamily;
  objDiv.appendChild(document.createTextNode('FONT TEST'));

  if (window.getComputedStyle) {
      return window.getComputedStyle(objDiv, null).getPropertyValue('font-family') === strFamily;
  }

  return objDiv.currentStyle.fontFamily === strFamily;
}
```
