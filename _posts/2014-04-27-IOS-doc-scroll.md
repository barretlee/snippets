---
layout: page
title: IOS边缘回弹的禁止
tags: IOS touchmove scroll
---

IOS的浏览器里头，文档滚到顶部或者底部，还是可以继续滚动，对于全屏的应用来说，这个多余的体验是十分不好的。如下：

<img src="https://cloud.githubusercontent.com/assets/2698003/2810913/958be2f6-cdf2-11e3-8266-4adf0ab7da7d.jpg" />

比较靠谱的方式是：

    document.addEventListener("touchmove", function(evt){
      evt.preventDefault();
    }, true);
    
禁用 touchmove，方法很靠谱，不过还是谨慎点用。呵呵。
