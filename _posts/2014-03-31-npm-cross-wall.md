---
layout: page
title: npm穿墙
---

GWF 很给力，很多东西都能墙掉，但是把 npm 也纳入黑名单，不知道 GWFer 是怎么想的。翻墙翻了好多年了，原理其实也挺简单的，proxy 嘛！

### » 方法一

**A)** 国内源，<http://cnpmjs.org>

使用方式，你可以在 cmd 中键入 `npm install -g cnpm`，然后出去吃个饭，如果还没有安装好，那就换个方式：

	npm install -g cnpm --registry=http://r.cnpmjs.org

registry 参数的作用就是指向需要 download 的仓库。 cnpm 跟国外的 npm 是同步的，只要 npm 有更新，cnpm 就会跟着一起更新。

当然，你也可以简单点搞：

	npm config set registry="http://r.cnpmjs.org"

在配置中直接指定源头，下次就没有必要使用 `--registry` 参数了。配置好了之后，npm 就指向了国内的仓库。

**B)** 当然，你也可以安装 cnpm，安装好了之后使用 cnpm 来下载文件，其实原理跟上面是一样的，于是你就可以这样了：

	cnpm install -g package_name

### » 方法二

代理，在配置中设置代理参数：

	# 全局路径，也就是 npm install -g，这里 -g 的意义
	npm config set prefix="c:\nodejs"

	# 一般使用 goagent 翻墙，他的默认端口是 8087
	npm config set proxy=http://127.0.0.1:8087

	# 设置 https 的代理
	npm config set https_proxy=http://127.0.0.1:8087

	# 这个地方记得设置下，别搞了个代理，结果在国内源下载
	npm config set registry=http://registry.npmjs.org

这样配置好了之后，打开你的 goagent ，记得一定要打开，不然 npm 必然报错。上面写了一堆，其实没必要跟着写这么多，一句话就可以搞定：

	npm config set proxy=http://127.0.0.1:8087

为啥呢，npm -g 没必要自己去配置， registry 默认就是 `http://registry.npmjs.org`，不配置 https_proxy，也走的通，所以就只剩下上面这条命令了。

### » 方法三

直接下载到本地。

实在是怕麻烦，就直接把文件 download 下来，然后放到 node_module 之中就行了。如果是全局模块，找到全局 node_module 的位置，然后解压放进去就行了。
