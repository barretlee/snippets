---
layout: default
title: elementfrompoint在延迟加载中的运用
---

### 接口信息

```C++
partial interface Document {
  Element? elementFromPoint(double x, double y);
  sequence<Element> elementsFromPoint(double x, double y);
  CaretPosition? caretPositionFromPoint(double x, double y);
};
```

### 获取条件

`elementFromePoint(x, y)`，它获取到元素的条件是：

- 参数为非负数
- x, y 不比 viewport 大
- 没有一个 viewport 与程序关联，如在 phantomJS 中执行程序

否则执行函数返回 null。

### 获取方式

- 对于 viewport 内的任一个 box，按照渲染顺序从最上面一个 box 开始寻找，知道 viewport 的底部。
- 如果文档有更元素，并且队列中的最后一个元素不是根元素，则纳入根元素。

### DEMO

[Full Screen](http://jsfiddle.net/barretlee/Ldtj7/embedded/result/)
