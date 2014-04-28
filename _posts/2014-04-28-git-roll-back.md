---
layout: page
title: git版本回退操作
tags: git CMS
---

今天 github 上操作遇到了一个很头疼的问题，在某个文件中进行了误操作（有可能是加入了BOM头），diff 没看到差异，但是线上就是不正常显示。修改半天没用，只要回退版本。

通过 `git log` 可以产看近期 commit 的信息：

    commit bcdfd65ba3f16a0647e7687f92cca25d51738d2e
    Author: Barret Lee <barret.china@gmail.com>
    Date:   Mon Apr 28 01:22:27 2014 +0800
    
        now post
    
    commit 69eeaa60c5808c143aabce4d52feb104e2e4591b
    Author: Barret <barret.china@gmail.com>
    Date:   Sat Apr 26 21:03:48 2014 +0800
    
        fix bug
    
    commit b9e4b8c697d139ec35e17be7dd353f1338e9b92e
    Author: Jing Lee <barret.china@gmail.com>
    Date:   Sat Apr 26 19:35:37 2014 +0800
    
        Update atom.xml
        
commit 后面的一串字符就是 SHA 字符。

    git reset --hard SHA  
    
这句命令可以回退到指定版本。不过上传的时候要注意了，如果你是：

    git push -u master origin
    
肯定会出现这样的错误提示：

    error: failed to push some refs to 'https://github.com/barretlee/barretlee.github.io.git'
    hint: Updates were rejected because the tip of your current branch is behind
    hint: its remote counterpart. Integrate the remote changes (e.g.
    hint: 'git pull ...') before pushing again.
    hint: See the 'Note about fast-forwards' in 'git push --help' for details.

原因是你本地版本要落后于服务器上的版本（git reset 回归了嘛），如果想覆盖服务器上版本，应该加 `-f` ，强制提交，

   git push -u master origin -f
   
不过这样的操作要谨慎了，先把修改的位置备份（拿出来，复制到文件夹外），完成上述操作之后再复制回来处理。
（完）
    
      
  
