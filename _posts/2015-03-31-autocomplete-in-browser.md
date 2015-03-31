---
layout: page
title: 干掉浏览器中的自动填充
tags: autocomplete 自动填充 chrome autofill
---

当我们在 chrome 浏览器中填写表单之后，如果表单中包含密码域，浏览器将会提示用户是否记住密码。一旦记住密码，即便这次填写的是错误的，下次登录时浏览器也会任性的给你自动填充信息。

这是开发者不喜欢看到的，对用户来说，也是不太安全的，通过

```javascript
console.log(document.getElementById("passwordInput").value)
```

就能拿到密码明文。虽加强了体验，但削弱了安全性，也让有「强迫症」的程序员感到颇为不爽。

当页面加载的时候直接将表单域设置为空，貌似是不起作用的。原因是，浏览器在页面加载到一定程度时（我也不知道是什么时机）从自己的数据库中挖出曾经保存的表单域，填充进去。

有人想到使用定时器，检测表单是否存在数据，这样的操作费时费力，不提倡。

可以考虑这个方案：

每个 `input` 都有 `defaultView` 属性，这是 DOM 初始化的时候给它加上的，判断

```javascript
input.defaultVale == input.value  
// 如果相等则不处理，如果不相等则将 value 置为空
```

感觉是，是靠谱的！
