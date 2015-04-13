---
layout: page
title: this的指向
tags: this reference
---

网友问题：

```javascript
var name = "The Window";   
　　var object = {  
　　　　name : "My Object",  
　　　　getNameFunc : function(){  
　　　　　　　　return this.name;  
　　　　}   
};  
var a = object.getNameFunc;
alert(a());
alert(object.getNameFunc());
```

原因：

`object.getNameFunc()` ，此时的 `object.getNameFunc` 为引用类型，其 base 为 `object`，this 指向的是 base，所以返回 `object.name` 的值

`name = object.getNameFunc`, `test` 作为标识符，生成了其他引用类型的值，此时 base 已经从 `object` 重置为 `null`，也就是会指向 global（window），所以返回的是 window.name 的值。

问题的关键在于「引用类型（type Reference）的中间值发生改变」
