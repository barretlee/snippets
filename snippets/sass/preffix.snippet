---
title: preffix
---

```
/// Mixin to prefix several properties at once
/// @author Hugo Giraudel
/// @param {Map} $declarations - Declarations to prefix
/// @param {List} $prefixes (()) - List of prefixes to print
@mixin prefix($declarations, $prefixes: ()) {
  @each $property, $value in $declarations {
    @each $prefix in $prefixes {
      #{'-' + $prefix + '-' + $property}: $value;
    }

    // Output standard non-prefixed declaration
    #{$property}: $value;
  }
}
```

使用：

```
.selector {
  @include prefix((
    column-count: 3,
    column-gap: 1.5em,
    column-rule: 2px solid hotpink
  ), webkit moz);
}
```

结果：

```
.selector {
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-gap: 1.5em;
  -moz-column-gap: 1.5em;
  column-gap: 1.5em;
  -webkit-column-rule: 2px solid hotpink;
  -moz-column-rule: 2px solid hotpink;
  column-rule: 2px solid hotpink;
}
```