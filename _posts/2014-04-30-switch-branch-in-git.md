---
layout: page
title: git切换到远程分支
tags: git
---

远程仓库 git clone 下来，当你执行 git branch，你只会看到

    * master
    
并不会看到其他分支，即便远程仓库上有其他分支，使用

    git branch -va
    
可以查看本地+远程分支列表

    * master                0840594 merge master and 1.0.0
    remotes/origin/1.0.0  743012a 'update'
    remotes/origin/2.0.0  2787838 udpate
    remotes/origin/HEAD   -> origin/master
    remotes/origin/master 0840594 merge master and 1.0.0
    
如果想切换到 origin/2.0.0 的分支，我们可以

    git branch remotes/origin/2.0.0
    
不过结果并不如意：

    * (detached from origin/2.0.0)
    master
    
git branch 会看到上面的信息，这里还需要一步操作：

    git checkout -b 2.0.0
    
-b 的意思是 base，以当前分支为 base，新建一个名叫 2.0.0 的分支，这里当然也可以使用其他的命名。此时再执行 git branch 就能看到：
  
    $ git br
      master
    * 2.0.0
    
就 OK 了~

（完）
