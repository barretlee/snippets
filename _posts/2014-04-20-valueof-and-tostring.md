---
layout: page
title: toString & valueOf
tag: wtf valueOf
---

    [] == ![] // true
    
其实这个问题没啥好讨论的，ECMA-262看看就知道了。不过很多人问，就做个笔记。

前面那个 [] 在解析的时候调用的是 valueOf 返回的结果是 ''
后面那个取反运算，对 NAN undefined null "" 0 取反结果才会是true，所以 ![] 的结果是 false

左边是 '' ，右边是 false，答案是什么一目了然了。

具体可以看看：<http://barretlee.com/ST/ES5.1/#sec-11.9.3>
