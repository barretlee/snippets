---
title: 上传多个文件
---

```html
<form method="post" action="upload.php" enctype="multipart/form-data">
  <input name='uploads[]' type="file" multiple>
  <input type="submit" value="Send">
</form>
```

后端 php 处理，可以这样：

```php
foreach ($_FILES['uploads']['name'] as $filename) {
    echo '<li>' . $filename . '</li>';
}
```