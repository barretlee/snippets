---
layout: page
title: textarea高度自适应
tags: 问答 textarea 自适应
---

问题：textarea数据是数据库直接输出填充，请问如何做到自适应?

回答：

    var tt = document.getElementsByTagName("textarea").item(0), 
        len = tt.value.length,
        width = tt.clientWidth,
        style = (window.getComputedStyle||function(a){return a.currentStyle})(tt, null),
        fs = parseInt(style['font-size']) || 12,
        lh = parseInt(style['line-height']) || fs * 1.2;
    
    tt.style.height = Math.ceil(len / (width / fs)) * lh + "px";
