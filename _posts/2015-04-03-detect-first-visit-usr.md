---
layout: page
title: 根据访问属性进行差异化数据加载
tags: javascript first-time-visit
---

判断用户是否第一次访问页面，先不说怎么做，想想什么场景下会用到？

如果我们页面的体积过大，用户第一次访问，会消耗大量的时间(2-5s)去下载页面所需要的资源，给用户带来的体验是很不好的，尤其是移动端的用户。如果我们可以在用户第一次访问的时候只加载主要内容，在这个主要内容中引导用户做更多的加载资源的操作，一方面可以让用户熟悉系统，一方面也给页面加载资源争取了巨量的时间，何乐而不为？！

我们能最快想到的方案是，使用 cookie ，服务器根据 cookie 的属性（如某个 Tag 的值为 1 或者 0）来判断要给用户呈现什么样的内容，这样做有几点不好：

1. 需要服务器协助，而很多时候前端对服务器的控制为 0
2. cookie在每次网页请求的时候都会附带，浪费 （当然，可以在用户访问一次之后清理这个 cookie，比如服务器端设置 session 值，不过又增加了后端的逻辑负担，而且不靠谱）
3. 如果用户禁用了 cookie 呢？

问题有很多，解决问题的方案也不少，针对这个问题，HTML5规范也提供了相应的事件和属性支持。

### 如何判断用户是否为第一次访问页面

当页面加载的时候会触发 onload 事件，完了之后触发 pageShow 事件，pageShow 事件是页面每次加载都会触发的，而 onload 不然。默认情况下，浏览器会缓存当前访问的页面（隐私模式除外，特殊处理，也会缓存，退出隐私模式时，缓存的所有内容全部删除），当用户点击前进或者后退按钮时，浏览器会从缓存中获取内容，这个时候 onload 事件是不会触发的。

可以这么说：

- 如果待加载的页面不存在于缓存中，会触发 onload ，再触发 pageShow
- 如果待加载的页面存在于缓存中，不触发 onload，只触发 pageShow

pageShow 事件对象 event 中有一个属性值，叫做 persisted，如果这个值为 true，则为缓存数据，false，则为第一次加载。

### 差异化加载

```javascript
var body = document.body;
body.onpageshow = function(evt){
  if(evt.persisted){
    // 如果从缓存加载，该干啥干啥
    doSomething();
  } else {
    // 如果用户第一次访问（没有缓存），只加载主体框架
    loadMainContent();
  }
};
```

在 `loadMainContent()` 我们可以这样干：

```javascript
funtion loadMainContent(){
  // 引导用户执行操作，操作一次加载点东西
  leadUserDoSomething();
  // 或者悄悄地缓慢的加载需要的数据
  loadDataInQuickMode();
}
```

当然，通过 cookie 或者 pageshow 事件属性判断用户浏览器是否有缓存数据不是最终的解决方案，但这是一种思考模式，可以发散思维~

