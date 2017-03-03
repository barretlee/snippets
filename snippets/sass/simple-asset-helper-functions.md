---
title: asserts helper
---

```
/// Base path for assets (fonts, images...),
/// should not include trailing slash
/// @access public
/// @type String
$asset-base-path: '../assets' !default;

/// Asset URL builder
/// @access private
/// @param {String} $type - Asset type, matching folder name
/// @param {String} $file - Asset file name, including extension
/// @return {URL} - A `url()` function leading to the asset
@function asset($type, $file) {
  @return url($asset-base-path + '/' + $type + '/' + $file);
}

/// Image asset helper
/// @access public
/// @param {String} $file - Asset file name, including extension
/// @return {URL} - A `url()` function leading to the image
/// @require {function} asset
@function image($file) {
  @return asset('images', $file);
}

/// Font asset helper
/// @access public
/// @param {String} $file - Asset file name, including extension
/// @return {URL} - A `url()` function leading to the font
/// @require {function} asset
@function font($file) {
  @return asset('fonts', $file);
}
```

使用：

```
@font-face {
  font-family: 'Unicorn Font';
  src: font('unicorn.eot?') format('eot'),
       font('unicorn.otf') format('truetype'),
       font('unicorn.woff') format('woff'),
       font('unicorn.svg#unicorn') format('svg');
  font-weight: normal;
  font-style: normal;
}

.foo {
  background-image: image('kittens.png');
}
```

结果：

```
@font-face {
  font-family: 'Unicorn Font';
  src: url("../assets/fonts/unicorn.eot?") format("eot"), url("../assets/fonts/unicorn.otf") format("truetype"), url("../assets/fonts/unicorn.woff") format("woff"), url("../assets/fonts/unicorn.svg#unicorn") format("svg");
  font-weight: normal;
  font-style: normal;
}

.foo {
  background-image: url("../assets/images/kittens.png");
}
```