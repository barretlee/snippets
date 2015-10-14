---
title: 检测浏览器是否安装flash
---

Author: 吕大豹

Email: 670818517(at)qq.com

``` 
function hasFlash(){
  if (navigator.plugins && navigator.plugins.length && navigator.plugins['Shockwave Flash']) {
    return true;
  } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
    var mimeType = navigator.mimeTypes['application/x-shockwave-flash'];
    return mimeType && mimeType.enabledPlugin;
  } else {
    try {
      var ax = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
      return true;
    } catch (e) {}
  }
  return false;
}
```

Author： 墨尘

```
/**
 * [isSupportFlash description]
 * @return {number} [ -1（不支持flash） | flash版本号]
 */
function getFlashVersion() {
    var version = -1;
    if( window.ActiveXObject ) {
        try{
            var swf = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            version = parseInt( swf.GetVariable("$version").split(" ")[1].split(",")[0]);
        }
        catch(e){}
    }
    else{
        if( navigator.plugins && navigator.plugins["Shockwave Flash"] ) {
            var arr = navigator.plugins['Shockwave Flash'].description.split(' ');
            var i = 0;
            var length = arr.length;
            if ( arr ) {
                for ( ; i < length ; i++) {
                    if (!isNaN( Number(arr[i]) )) {
                        version = Number(arr[i]);
                        break;
                    }
                }
            }
        }
    }
    return version;
}
```
