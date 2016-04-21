---
title: 功能性函数，批量处理
---

```sass
/// Apply `$function` with `$args` to each item from `$list`.
/// @author Hugo Giraudel
/// @param {List} $list - List of items
/// @param {String} $function - Function to apply to every item from `$list`
/// @param {Arglist} $args - Extra arguments to pass to `$function`
/// @return {List}
/// @throw There is no `#{$function}` function.
@function walk($list, $function, $args...) {
  @if not function-exists($function) {
    @error "There is no `#{$function}` function.";
  }

  @for $i from 1 through length($list) {
    $list: set-nth($list, $i, call($function, nth($list, $i), $args...));
  }

  @return $list;
}
```

使用：

```
walk {
  walk: walk(red green blue, invert);
  walk: walk(red green blue, lighten, 20%);
  walk: walk(2 4 6 8 10, sqrt);
}
```

结果：

```
walk {
  walk: cyan #ff7fff yellow;
  walk: #ff6666 #00e600 #6666ff;
  walk: 1.41421 2 2.44949 2.82843 3.16228;
}
```