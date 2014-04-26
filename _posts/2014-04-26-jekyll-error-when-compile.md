---
layout: page
title: jekyll编译时报错invalid byte sequence in GBK
tags: jekyll ruby error
---

找到你的Ruby安装目录，如我的是：D:\Ruby193, 在里面找到文件D:\Ruby193\lib\ruby\gems\1.9.1\gems\jekyll-0.12.0\lib\jekyll\convertible.rb
在该文件中找到下面句子：

    # Returns nothing.
        def read_yaml(base, name)
          self.content = File.read(File.join(base, name))
      
将它修改为：

    # Returns nothing.
        def read_yaml(base, name)
          self.content = File.read(File.join(base, name),:encoding=>"utf-8")
      
然后确保所有带中文字符的markdown文件是无BOM的UTF-8格式即可。
