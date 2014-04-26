---
layout: page
title: jekyll中gsup未定义的错误
tags: error jekyll
---

今天被 jekyll 编译时的一个问题搞疯了。
  
> Liquid Exception: undefined method `gsub' for nil:NilClass in atom.xml

上面这个错误，开始以为时jekyll的版本问题，后来又以为时 UIT8 编码错误，再继续折腾，看了很多博客还是没有处理好。

再 `atom.xml` 中我写了一句 \{\{ post.description \}\}，以前一直是这样的啊，没报错。不知道 github pages 的后台 jekyll 编译器是不是做了版本或者其他方面的修改，定位到这个位置之后，把内容改成了

    \{\{ post.excerpt \}\}
    \{\{ post.content \}\} # 改成这个也可以，只是内容太多，我不喜欢
    
差不多整了我两个小时，这么点小错误，妹的！
