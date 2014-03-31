---
layout: page
title: webview中的点击高亮问题
---

这两天在做一个淘金币的小游戏，测试页面的时候还挺正常的，放到webview（嵌入诸如微信、微博等客户端的网页容器）中就出问题了。

给元素绑定了一个 tap 事件，点击元素，该元素周边会出现点东西，IOS 中是个半透明的灰色背景，在 android 中出现红色的边框，不仅影响美感，貌似还会影响性能（这点东西渲染出来需要时间，会阻塞 JS 中控制的元素渲染）。

开始本以为使用 user-select 可以干掉这玩意儿，结果无效，网上寻觅半天之后，找到了问题。

css 中有个属性叫做 -webkit-tap-highlight-color ，顾名思义，就是点击元素的时候会有一个高亮的效果。当然不能把他称之为 bug，这也是浏览器为了让用户知道你点中了某个东西，给他醒目的提示，算是增强体验，但是在一些场景中，这不仅没有增强体验，还会影响体验。

解决方案：

  .obj {-webkit-tap-highlight-color:rgba(0,0,0,0);}
    
有些机子可能比较坑爹，rgba 这种方式支持的不是很好，我们可以用 transparent 来给他透明化。

  .obj {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent; /* For some Androids */
  }
  
小小分享。（完）
