---
title: Firebug脚本
---

```
<script type='text/javascript' src='http://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js'></script>
```

可以将此保存为书签：

<a href="javascript:var firebug=document.createElement('script');firebug.setAttribute('src','http://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js');document.body.appendChild(firebug);(function(){if(window.firebug.version){firebug.init();}else{setTimeout(arguments.callee);}})();void(firebug);" style="display: inline-block; border: 1px solid #CCC; padding: 4px 8px; margin: 15px; cursor: move;" draggable='true'>将此拖到书签栏</a>

书签代码：

```
javascript:var firebug=document.createElement('script');firebug.setAttribute('src','http://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js');document.body.appendChild(firebug);(function(){if(window.firebug.version){firebug.init();}else{setTimeout(arguments.callee);}})();void(firebug);
```