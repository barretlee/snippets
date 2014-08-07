---
layout: page
title: 绝对定位，margin:0 auto，让元素竖直居中
tags: regexp branch
---

**问题：**

    div {
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0
        bottom: 0;
        width: 100px;
        height: 100px;
    }
 
是如何自适应的。

原因是，绝对定位的布局取决于三个因素，一个是元素的位置，一个是元素的尺寸，一个是元素的margin值。

没有设置尺寸和 margin 的元素会自适应剩余空间，位置固定则分配尺寸，尺寸固定边会分配 margin，都是自适应的。

IE7- 的渲染方式不同，渲染规则也不一样，他不会让定位元素去自适应。
