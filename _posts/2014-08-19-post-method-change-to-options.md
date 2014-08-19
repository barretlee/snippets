---
layout: page
title: POST请求失败，变成options请求
tags: post,ajax,跨域
---

**问题：**

> 我的 XMLHttpRequest 跨域 POST ，怎么请求方式自动由POST变成OPTIONS了呢？

浏览器为了安全起见，会先发送一个 options 请求，确保请求发送是安全的，一般 POST DELETE PUT 等请求都会修改服务器资源，所以浏览器会先发一个请求，问问服务器是否会正确（允许）请求。

出现 OPTIONS 的情况一般为：

1. 非 GET | POST 请求
2. POST 请求的 content-type 不是常规的那三个
3. POST 请求的 payload 为 text/xml

> 我的请求倒是很常规啊，不存在上面3条的问题

跨域了呀，浏览器也会为了试探服务器是否会接受请求，先发送一个 options 请求。即便是服务器允许程序跨域访问，若不支持 options 请求，请求也会死掉。
