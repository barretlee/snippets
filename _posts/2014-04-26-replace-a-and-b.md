---
layout: page
title: 巧妙交换值
tags: replace tips
---

    a = 1, b = 2;
    a = [b, b = a][0];
    a // 2
    b // 1
    
很巧妙的替换了 a 和 b 的值。
