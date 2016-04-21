---
title: Google Font加载
---

```
<head>
   ...
   <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Tangerine:bold,bolditalic|Inconsolata:italic|Droid+Sans">
</head>
```

```
<script src="http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"></script>
<script type="text/javascript">
  WebFont.load({
    google: {
      families: ['Cantarell']
    }
  });
</script>
<style type="text/css">
  .wf-loading h1 { visibility: hidden; }
  .wf-active h1, .wf-inactive h1 {
    visibility: visible; font-family: 'Cantarell';
  }
</style>
```