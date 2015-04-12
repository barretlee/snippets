---
layout: page
title: Xcode-select Error
tags: mac Xcode Error
---

错误信息：

> xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance


解决方案：

```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```
