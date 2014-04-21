---
layout: page
title: cloneNode/importNode Bug in Old Chrome
tag: bug chrome checkbox cloneNode
---

  support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

有人问：为什么需要 cloneNode 两次呀？

这是老版 chrome 内部实现的一个 bug，这个 bug 在四年前就提出来了，cloneNode 和 importNode 没法保存片段代码中表单元素诸如 value/checked 之类的属性。

解决方案是：将 cloneNode 拿到的代码片段在 clone 一次。如同 IE6 下浮动元素 margin 的渲染，是 IE6 的 bug，通过设置 inline 可以解决。

- Bug 地址：<https://bugs.webkit.org/show_bug.cgi?id=6617>
- Bug 测试源码：https://webkit.googlesource.com/WebKit/+/a847461eedf68a16e2d2491447608ea3bf9d7890/LayoutTests/fast/dom/clone-node-form-elements-with-attr.html
- JQ中对这个 bug 的阐述：<http://bugs.jquery.com/ticket/5832>
- JQ对这个bug 的处理：<http://bugs.jquery.com/ticket/5929>
