---
layout: page
title: clip的安装和使用
tags: tips clip
---

很多情况下我们需要复制整个文件的内容，然后粘贴到其他地方，像我这种命令行控，文件操作基本都是命令行处理的，平时会用 vim 打开文件，然后

    vim FILE # 打开文件
    ggVG # 全选内容
    "+y  # 复制到系统缓冲区
    
说实话，这真的很麻烦，其实我们可以这样：

    # windows用户
    clip < FILE
    echo "content" | clip
    
    # linux用户
    xclip -sel clip < FILE
    
省去了打开文件复制的过程。

（完）



