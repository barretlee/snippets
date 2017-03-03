---
title: Unicode icon
---

演示：

<div class="demo">
<p>
  <a href="mailto:barret.china@gmail.com">
    chriscoyier@gmail.com
  </a>
</p>

<p class="phone">
    555-555-5555
</p>

<p class="important">
  REMEMBER: drink slushies too fast.
</p>

<blockquote>
   Designers tend to whisper, ad agencies tend to shout.
</blockquote>

<p class="alert">
   Stranger Danger!
<p>
</div>

<style>
.demo a[href^="mailto:"]:before { content: "\2709"; }
.demo .phone:before             { content: "\2706"; }
.demo .important:before         { content: "\27BD"; }
.demo blockquote:before         { content: "\275D"; }
.demo blockquote:after          { content: "\275E"; }
.demo .alert:before             { content: "\26A0"; }
</style>

```
a[href^="mailto:"]:before { content: "\2709"; }
.phone:before             { content: "\2706"; }
.important:before         { content: "\27BD"; }
blockquote:before         { content: "\275D"; }
blockquote:after          { content: "\275E"; }
.alert:before             { content: "\26A0"; }
```