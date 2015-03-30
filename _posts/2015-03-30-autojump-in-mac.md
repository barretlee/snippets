---
layout: page
title: mac下的效率工具autojump
tags: mac 效率 autojump
---

IDE 用起来总是得不到满足，Mac 适合搞开发，我也十分喜欢 Mac 系统，当然可以说喜欢 Unix/Linux 系统。今天在 `.zshrc` 文件中添加了这么几行快捷命令：


```bash
alias gow   = "cd ~/barretlee/work"
alias gotb  = "cd ~/barretlee/work/tb"
alias gotbn = "cd ~/barretlee/work/tb/node" 
```

写完之后我立马把这几行命令删掉了，这种方式似乎有点二。网上搜罗了下，找到了一个挺不错的工具 - autojump。

Autojump 自己是这么描述的：

> autojump  is  a  faster way to navigate your filesystem.  It works by maintaining a database of the directories you use the most from the command line.


通过 `history` 命令你可以找到最近用过的命令，比如

```bash
history | gerp "git clone"
```

通过上述命令就能找到近期 clone 了哪些库，省却了写一堆代码的功夫。autojump 就是通过记录你在 history 中的行为把你访问过的文件夹路径都 cache 下来，当你进行如下操作时：

```bash
autojump node
```

他会直接跳到之前访问的 `~/barretlee/work/tb/node` 目录下。他还有一个快捷方式：

```bash
j node
```

我很喜欢这个小工具，让我游荡于文件夹之间不费吹灰之力。

### 安装：

- 建议安装 zsh
- 建议安装 homebrew
- `brew install autojump`
- 在 `.zshrc` 中找到 `plugins= `，在后面添加 

  ```bash
  plugins=(git autojump)
  ```
- 然后继续在上述文件中添加 

  ```bash
  [[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] && . $(brew --prefix)/etc/profile.d/autojump.s
  ```
- `source ~/.zshrc`

**Enjoy coding. :)**
