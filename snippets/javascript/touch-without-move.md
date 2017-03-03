---
title: touchstart 事件防抖动
---

一个元素上可能监听了多个事件，比如 drag、swipe、tap 等，比如顶部导航，我们在导航元素上注册了 touchstart 事件用来统计子导航的单击量，由于导航过长，我们还为其注册了一个 drag 事件，向左拖动查看右侧更多子导航。

此时简单的 drag 拖动就可能触发 touchstart 事件，造成无效点击统计。

下面是一个简单的处理方案：如果元素上存在 mark 属性，当 touchstart 时拿到 event.target 和它所有父元素的 scrollTop & scrollLeft 值，touchend 的时候判断这些 scrollTop & scrollLeft 值变化 delta 是否大于 20px，如果大于则阻止 touchstart 上的注册事件 `doSomethingWhenTouchStart`。

```javascript
$('[mark]').on('touchstart', function(evt) {
  var target = $(evt.target);
  while(target) {
    (evt.target.scrollInit = evt.target.scrollInit || []).push({
      t: target.scrollTop(),
      l: target.scrollLeft()
    });
    target = $(target).parent();
  }
}).on('touchend touchcancel', function(evt){
  var target = $(evt.target);
  var scrollInit = evt.target.scrollInit;
  var index = 0;
  while (target) {
    var deltaY = target.scrollTop() - scrollInit[index].t;
    var deltaX = target.scrollLeft() - scrollInit[index].l;
    if(Math.abs(deltaX) >= 20 || Math.abs(deltaY) >= 20) {
      return;
    }
    target = $(target).parent();
    index++;
  }
  delete evt.target.scrollInit;
  // doSomethingWhenTouchStart();
});
```
