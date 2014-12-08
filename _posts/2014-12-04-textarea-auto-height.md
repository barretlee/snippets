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
        style = (window.getComputedStyle
                    ||function(a){return a.currentStyle})(tt, null),
        fs = parseInt(style['font-size']) || 12,
        lh = parseInt(style['line-height']) || fs * 1.2;
    
    tt.style.height = Math.ceil(len / (width / fs)) * lh + "px";
    
这里需要注意的是：

- line-height 可能是 normal/inhert 之类的值，所以最好加上一个默认值
- 上面算法适合等宽字体
- 防止计算误差，使用 Math.ceil 函数，比较靠谱的方式是 Math.ceil(len / (width / fs) - 1)，可以少一行~


找个有 textarea 的页面，打开控制台，输入字符，验证下吧~
