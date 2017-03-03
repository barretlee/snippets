---
title: 让 favicon 走正确路线
---

```
# REDIRECT FAVICON.ICO
<ifmodule mod_rewrite.c>
RewriteCond %{REQUEST_URI} !^/favicon\.ico [NC]
RewriteCond %{REQUEST_URI} favicon\.ico    [NC]
RewriteRule (.*) http://css-tricks.com/favicon.ico [R=301,L]
</ifmodule>
```

```
# REDIRECT AJAX-LOADER
<ifmodule mod_rewrite.c>
RewriteCond %{REQUEST_URI} !^/images/ajax\-loader\.gif [NC]
RewriteCond %{REQUEST_URI} ajax\-loader\.gif           [NC]
RewriteRule (.*) http://css-tricks.com/images/ajax-loader.gif [R=301,L]
</ifmodule>
```