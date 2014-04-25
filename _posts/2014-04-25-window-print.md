---
layout: page
title: 打印
tags: print tips
---

打印的常用的几种方式：

### 1. open新页面打印

    var childWin = window.open("about:blank");
    childWin.document.body.innerHTML = document.body.innerHTML;
    // code... 
    // 操作（修改/隐藏/添加）内容
    childWin.print();
    
### 2. iframe中打印

    var ifr = document.createElement("iframe");
    ifr.src = "about:blank";
    ifr.style.display = "none";
    document.body.appendChild(ifr);
    var win = ifr.contentWindow;
    win.document.body.innerHTML = document.body.innerHTML;
    // code... 
    // 操作（修改/隐藏/添加）内容
    win.print();
    
### 3. 本页打印

    var oldHTML = document.body.innerHTML;
    // code... 
    // 操作（修改/隐藏/添加）内容
    window.print();
    // 完了之后
    document.body.innerHTML = oldHTML;
    
