---
layout: page
title: 当正则匹配零个字符
tags: JavaScript regexp
---

    "something".match(/\s*(.*?)\s*/)
    > ['', '']
    
    "something".match(/^\s*(.*?)\s*$/)
    > ["something", "something"]
    
为何前者匹配的结果为空？

如果你不清楚正则的贪婪模式和非贪婪模式，请先移步[这里](http://www.cnblogs.com/hustskyking/p/how-regular-expressions-work.html#p-2.2).

整个匹配分为三步：

1. 第一个 \s*, 贪婪模式把字符全部吞掉，然后回溯，直到第一个字符任然没找到
2. 第二步是 .*? 由于是非贪婪模式匹配了一个字符就结束了，继续第三步
3. 第三步匹配失败，回溯到第二步，那第二步会继续减少吞掉的字符，于是字符数缩减到零。

可能这么说还是不太清晰，先看看这个对比：
![qq20140428195101](https://cloud.githubusercontent.com/assets/2698003/2816541/7e6c1076-cecb-11e3-823e-640e1b53ca00.jpg)

关于返回结果不是 null 而是 ""，你可以理解为匹配到了零个 a。
