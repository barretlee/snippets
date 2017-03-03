---
title: IE条件注释，为IE单独写js
---

```html
<!--[if IE ]>
   <body class="ie">
<![endif]-->
<!--[if !IE]>-->
   <body>
<!--<![endif]-->
```


```html
<!DOCTYPE html>
<!--[if IEMobile 7 ]>
  <html dir="ltr" lang="en-US"class="no-js iem7">
<![endif]-->
<!--[if lt IE 7 ]>
  <html dir="ltr" lang="en-US" class="no-js ie6 oldie">
<![endif]-->
<!--[if IE 7 ]>
  <html dir="ltr" lang="en-US" class="no-js ie7 oldie">
<![endif]-->
<!--[if IE 8 ]>
  <html dir="ltr" lang="en-US" class="no-js ie8 oldie">
<![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)|!(IEMobile)|!(IE)]> <-->
  <html dir="ltr" lang="en-US" class="no-js">
<!--> <![endif]-->
```
