---
title: settter
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
/// Deep set function to set a value in nested maps
/// @author Hugo Giraudel
/// @access public
/// @param {Map} $map - Map
/// @param {List} $keys -  Key chaine
/// @param {*} $value - Value to assign
/// @return {Map}
@function map-deep-set($map, $keys, $value) {
  $maps: ($map,);
  $result: null;

  // If the last key is a map already
  // Warn the user we will be overriding it with $value
  @if type-of(nth($keys, -1)) == "map" {
    @warn "The last key you specified is a map; it will be overrided with `#{$value}`.";
  }

  // If $keys is a single key
  // Just merge and return
  @if length($keys) == 1 {
    @return map-merge($map, ($keys: $value));
  }

  // Loop from the first to the second to last key from $keys
  // Store the associated map to this key in the $maps list
  // If the key doesn't exist, throw an error
  @for $i from 1 through length($keys) - 1 {
    $current-key: nth($keys, $i);
    $current-map: nth($maps, -1);
    $current-get: map-get($current-map, $current-key);
    @if $current-get == null {
      @error "Key `#{$key}` doesn't exist at current level in map.";
    }
    $maps: append($maps, $current-get);
  }

  // Loop from the last map to the first one
  // Merge it with the previous one
  @for $i from length($maps) through 1 {
    $current-map: nth($maps, $i);
    $current-key: nth($keys, $i);
    $current-val: if($i == length($maps), $value, $result);
    $result: map-merge($current-map, ($current-key: $current-val));
  }

  // Return result
  @return $result;
}
```

```
$o-grid-default-config: map-deep-set($o-grid-default-config, "layouts" "M", 650px);
```