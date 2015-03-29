---
layout: page
title: mac数据迁移xcode错误问题
tags: mac 数据迁移 xcode
---

在安装 Homebrew (Mac 下的软件管理工具，类似 linux 的 apt-get、yum 等)的时候，系统报错：

```bash
xcode-select: error: command line tools are already installed, use "Software Update" to install updates
```
网上搜罗了下，是 xcode 直接从其他电脑复制过来导致的问题，可以执行以下命令查看他的来源：

```bash
xcode-select -p
```

果然，返回的结果是：

```bash
/Volumes/Macintosh HD/Applications/Xcode.app/Contents/Developer
```
一个错误的路径，`Macintosh HD` 是另一台电脑的硬盘名称，处理方式也比较简单，将路径修改过来：

```bash
sudo xcode-select --switch /Library/Developer/CommandLineTools
```

验证方式：在命令行输入 `gcc`，如果没有报出之前的错误（xcode-select: error: ...) 就 ok 了。
