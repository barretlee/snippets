---
layout: page
title: gem速度慢
tags: ruby gem
---

删除本来的源，添加淘宝的源。

1 查看源

	gem sources list
	
2 删除list中的源

	gem sources --remove http://rubygems.org/
	
3 查看是否已经删除

	重复1,结果为空就正确
	
4 添加淘宝的源

	gem sources -a http://ruby.taobao.org/
