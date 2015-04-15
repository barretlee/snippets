---
layout: page
title: sublime text 3 没有node的build-system
tags: ST3 node build-system
---

郁闷了好多次了，Mac 系统 Sublime Text 3，具体版本是 Stable Channel，Build 3083，没有 node 的 build-system，为了方便调试，每次都得把巨型的 webstrom 打开，今天摸索了下，找到了方案~

首先安装下 `Javascript & Coffee Build System` 的插件，这个时候 ST 会多出三个 Build-System，分别是

1. xjs
2. xjs - Compile
3. xjs - Harmony

使用 xjs 就可以运行 js 脚本，直接 Ctrl + B 可能会报错，说 

```bash
not found file or fold `node`
```

云云的错误。我们的 node 一般安装在 `/usr/local/bin/node` 这个地方。而环境变量，如果没有修改的话应该是这些：

```bash
/usr/bin:/usr/sbin/:/bin:/sbin
```

你可以将 `/usr/local/bin/node` 加入到环境变量，也可以这样

```bash
sudo ln -s /usr/local/bin/node /usr/bin/node
```

OK，就这么愉快的搞定了，如果想以 harmony 方式运行，可以按下 `Ctrl+Shift+B`，选择 `xjs - Harmony` 就行了。
