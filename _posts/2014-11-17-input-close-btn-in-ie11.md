---
layout: page
title: 去掉IE11中input右侧的关闭叉叉
tags: 笔记
---

在 IE11 下，浏览器自作多情在 text input 组件上加一个 close 叉叉：

![image](https://cloud.githubusercontent.com/assets/2698003/5064209/825ef988-6e3e-11e4-900a-5fadd3465d94.png)

这么整：

    input::-ms-clear { display: none; } 
    
这种伪元素类似于 web component.
