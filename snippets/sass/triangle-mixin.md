---
title: triangle mixin
---

```
/// Triangle helper mixin
/// @param {Direction} $direction - Triangle direction, either `top`, `right`, `bottom` or `left`
/// @param {Color} $color [currentcolor] - Triangle color
/// @param {Length} $size [1em] - Triangle size
@mixin triangle($direction, $color: currentcolor, $size: 1em) {
  @if not index(top right bottom left, $direction) {
    @error "Direction must be either `top`, `right`, `bottom` or `left`.";
  }

  width: 0;
  height: 0;
  content: '';
  z-index: 2;
  border-#{opposite-position($direction)}: ($size * 1.5) solid $color;

  $perpendicular-borders: $size solid transparent;

  @if $direction == top or $direction == bottom {
    border-left:   $perpendicular-borders;
    border-right:  $perpendicular-borders;
  } @else if $direction == right or $direction == left {
    border-bottom: $perpendicular-borders;
    border-top:    $perpendicular-borders;
  }
}
```

使用：

```
.foo::before {
  @include triangle(bottom);
  position: absolute;
  left: 50%;
  bottom: 100%;
}
```

结果：

```
.foo::before {
  width: 0;
  height: 0;
  content: '';
  z-index: 2;
  border-top: 1.5em solid currentColor;
  border-left: 1em solid transparent;
  border-right: 1em solid transparent;
  position: absolute;
  left: 50%;
  bottom: 100%;
}
```