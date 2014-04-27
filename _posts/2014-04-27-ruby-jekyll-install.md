---
layout: page
title: jekyl安装不了？
tags: ruby jekyll
---

1、安装Ruby

	sudo apt-get install ruby1.9.1-dev
	
2、安装Jekyll

	sudo gem install jekyll
	
3、安装rake(用来可以生成markdown文件)

	sudo gem install rake
	
注意几点：

- 不是安装 ruby，而是 ruby-dev
- 安装 jekyll 之前应该先安装 rdoc
	
	sudo gem install rdoc
	
- 关于gem的下载速度，查看[这篇文章](/2014/04/27/gem-sources)
