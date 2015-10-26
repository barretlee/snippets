## Snippets

很多语言、很多配置、很多语法，太多太多东西，不能单靠大脑来记忆。[本应用](http://snippets.barretlee.com) 收集了一些平时常用以及网上寻觅的代码片段，并且在页面中提供了搜索功能，可以快速找到我们平时记下的代码，这里保存的部分片段还是十分有价值的。

本应用对应的网址为: <http://snippets.barretlee.com>

![snippet](http://www.barretlee.com/blogimgs/2015/09/20150902_2774c376.jpg)

### 贡献代码

如果你希望帮助丰富代码片段库，可以操作如下流程：

- fork [barretlee/snippets](https://github.com/barretlee/snippets.git) 仓库
- 然后执行如下命令
```
git clone https://github.com/{YOUR_GITHUB_NAME}/snippets.git
cd snippets
git checkout -b gh-pages
cd snippets
# 选择你想提交的文件类型，比如 html
cd html
touch {YOUR_CONTRIBUTE_FILE_NAME}.snippet
```
其中，`{YOUR_CONTRIBUTE_FILE_NAME}.snippet` 的格式为：
```
---
title: {NAME}
---

{CONTENT}
```
可以使用 markdown 语法。
- 提交代码
```
git add --all
git commit -m "add file html/{YOUR_CONTRIBUTE_FILE_NAME}.snippet"
git push origin gh-pages
```
- 然后在你的 [PR](https://github.com/{YOUR_GITHUB_NAME}/snippets/pulls) 页面提交一个 PR 到 `barretlee/snippets` 的仓库

### 关于

![小胡子哥](http://www.barretlee.com/avatar150.png)

[小胡子哥的联系方式](http://www.barretlee.com/about/)

### LISCENSE

MIT LISCENSE. 

自由分享使用，注意保留署名。