---
title: getter
---

```
$o-grid-default-config: (
    columns: 12,
    gutter: 10px,
    min-width: 240px,
    max-width: 1330px,
    layouts: (
        S:  370px,  // ≥20px columns
        M:  610px,  // ≥40px columns
        L:  850px,  // ≥60px columns
        XL: 1090px  // ≥80px columns
    ),
    fluid: true,
    debug: false,
    fixed-layout: M,
    enhanced-experience: true
);
```

```
/// Map deep get
/// @author Hugo Giraudel
/// @access public
/// @param {Map} $map - Map
/// @param {Arglist} $keys - Key chain
/// @return {*} - Desired value
@function map-deep-get($map, $keys...) {
    @each $key in $keys {
        $map: map-get($map, $key);
    }
    @return $map;
}
```

```
$m-breakpoint: map-deep-get($o-grid-default-config, "layouts", "M");
// 610px
```