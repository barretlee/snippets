---
title: 修复 winPhone8 的 IE10 viewport 问题
---

```
(function() {
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(
      document.createTextNode("@-ms-viewport{width:auto!important}")
    );
    document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
  }
})();
```

### Refer

Matt Stow: [Responsive Design in IE10 on Windows Phone 8](http://mattstow.com/responsive-design-in-ie10-on-windows-phone-8.html)

Tim Kadlec: [Windows Phone 8 and Device-Width](http://timkadlec.com/2013/01/windows-phone-8-and-device-width/)