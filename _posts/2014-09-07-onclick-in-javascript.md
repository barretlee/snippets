---
layout: page
title: window.open被浏览器拦截
tags: javascript click 浏览器拦截
---

我们都知道浏览器会拦截非鼠标触发的 window.open 事件，不同浏览器的处理不统一，如 chrome 还支持键盘触发 open，而 firefox 只允许鼠标左键触发，etc.

在低版本 IE 下，我们可以使用 ActiveXObject 或者 Object 新开一个页面，如：

    // IE Only
    var o=new ActiveXObject("WMPlayer.OCX");
    o.launchURL("http://barretlee.com");
    
如果用户禁用了 WMP 对象，自然也是弹不出来的，值得注意的是，此处打开页面的是系统默认浏览器，而不是正在执行该脚本的浏览器，因为 WMP 使用的是自己的方法开打页面，跟浏览器没有任何关系。

我也尝试在页面中插入一个空的 iframe ，然后在 iframe 中打开链接，不通。
也尝试过模拟事件来触发 click，依然不行。

open 页面，浏览器会跟踪事件源，如果不是外部设备输入的而是 javascript 执行的信号，此次 open 将被浏览器拦截（浏览器设置了允许某个 URL 弹窗除外）。

根据这个问题，我也测试了下，浏览器的反应时间：

    // 点击页面后，出现弹窗
    document.onclick = function(){
      setTimeout(function(){
        open("http://barretlee.com")
      }, 1000);
    }
    // 点击页面后，出现未弹窗
    document.onclick = function(){
      setTimeout(function(){
        open("http://barretlee.com")
      }, 1001);
    }

根据上面的测试，可以知道浏览器对外部设备信号的感知允许 1s 的延迟，为了排除进程阻塞的问题，加了个 while 循环 1s：

    document.onclick = function(){
      var t = new Date*1; 
      while(new Date*1 - t < 1000){} 
      setTimeout(function(){
        open("http://barretlee.com")
      }, 1000)
    }
    
上面代码并没有弹窗。

由此可以确定用户操作，浏览器允许的响应时间就是 1s 了。
