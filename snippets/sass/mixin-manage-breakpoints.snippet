---
title: responsive media
---

```
$breakpoints: (
  'small':  767px,
  'medium': 992px,
  'large':  1200px
) !default;
```

```
/// Mixin to manage responsive breakpoints
/// @author Hugo Giraudel
/// @param {String} $breakpoint - Breakpoint name
/// @require $breakpoints
@mixin respond-to($breakpoint) {
  // If the key exists in the map
  @if map-has-key($breakpoints, $breakpoint) {
    // Prints a media query based on the value
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  }

  // If the key doesn't exist in the map
  @else {
    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "
        + "Available breakpoints are: #{map-keys($breakpoints)}.";
  }
}
```

使用：

```
.selector {
  color: red;

  @include respond-to('small') {
    color: blue;
  }
}
```

结果：

```
.selector {
  color: red;
}
@media (min-width: 767px) {
  .selector {
    color: blue;
  }
}
```