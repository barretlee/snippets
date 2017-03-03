---
title: requestAnimationFrame Polyfill
---

```
var lastTime = 0;
var id = null;
window.requestAnimationFrame = function( callback, element ) {
  var currTime = new Date().getTime(),
    timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) ),
    id = window.setTimeout( function() {
      callback( currTime + timeToCall );
    }, timeToCall );
  lastTime = currTime + timeToCall;
  return id;
};

window.cancelAnimationFrame = function(id) {
  clearTimeout(id);
};
```
