---
title: Promise的递归调用
---

在递归爬取页面的时候，如果发现存在 next 标签就继续爬取，直到爬完。

```
function getList(url) {
  return new Promise(function(resolve, reject){
    request(url, function(err, res, body) {
      resolve(cheerio.load(body));
    });
  }).then(function($){
    var next = $(".next").attr('href');
    if(next) {
      return getList(next);
    } else {
      return "DONE"
    }
  });
}
```
