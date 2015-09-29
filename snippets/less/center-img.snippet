---
title: 图片垂直居中
---

感谢<a href="https://github.com/neekey">neekey</a>贡献代码！

```
/**
 * 图片的垂直居中，注意容器不能设置float，会破坏display的效果，有需要建议在外层增加一层div包裹
 *
 * 正常使用，将该方法设置给img的父元素即可:
 *    div.pic-wrapper
 *      img
 * 若元素需要float:
 *    div.float
 *      div.pic-wrapper
 *        img
 * @param width
 * @param height
 */
.image-middle(@width, @height) when(ispixel(@height)) {

  // 非IE的主流浏览器识别的垂直居中的方法
  display: table-cell;
  vertical-align:middle;
  text-align:center;
  height: @height;
  width: @width;

  // 针对IE678最垂直居中
  // 针对IE的Hack
  display: ~'block\0';/* ie 8/9*/
  display: ~'table-cell\9\0';/* ie 9*/
  *display: block;

  *font-size: @height * 0.873;

  line-height: ~'@{height}\0';/* ie 8/9*/
  line-height: ~'inherit\9\0';/* ie 9*/
  *line-height: @height;
  // 防止非utf-8引起的hack失效问题，如gbk编码
  *font-family:Arial;

  img {
    max-height: @height;
    max-width: @width;
    vertical-align: middle;
  }
}

/**
 * 兼容一个参数的写法，长宽相等
 */
.image-middle(@square:60px){
  .image-middle(@square, @square);
}
```
