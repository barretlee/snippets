---
title: 类型检测
---

```
////
// A collection of function for advanced type checking
// @author Hugo Giraudel
////

@function is-number($value) {
  @return type-of($value) == 'number';
}

@function is-time($value) {
  @return is-number($value) and index('ms' 's', unit($value)) != null;
}

@function is-duration($value) {
  @return is-time($value);
}

@function is-angle($value) {
  @return is-number($value) and index('deg' 'rad' 'grad' 'turn', unit($value)) != null;
}

@function is-frequency($value) {
  @return is-number($value) and index('Hz' 'kHz', unit($value)) != null;
}

@function is-integer($value) {
  @return is-number($value) and round($value) == $value;
}

@function is-relative-length($value) {
  @return is-number($value) and index('em' 'ex' 'ch' 'rem' 'vw' 'vh' 'vmin' 'vmax', unit($value)) != null;
}

@function is-absolute-length($value) {
  @return is-number($value) and index('cm' 'mm' 'in' 'px' 'pt' 'pc', unit($value)) != null;
}

@function is-percentage($value) {
  @return is-number($value) and unit($value) == '%';
}

@function is-length($value) {
  @return is-relative-length($value) or is-absolute-length($value);
}

@function is-resolution($value) {
  @return is-number($value) and index('dpi' 'dpcm' 'dppx', unit($value)) != null;
}

@function is-position($value) {
  @return is-length($value) or is-percentage($value) or index('top' 'right' 'bottom' 'left' 'center', $value) != null;
}
```