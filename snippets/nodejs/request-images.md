---
title: nodejs请求并保存图片
---

最直接的方式是：

```
request('http://google.com/doodle.png')
  .pipe(fs.createWriteStream('doodle.png'));
```

但是有的时候需要异步获取，所以需要用其他方式处理：

```
new Promise(function(resolve, reject){
  request({
    url: 'http://barretlee.com/avatar.png',
    encoding: 'binary'
  }, function(err, res, body) {
    resolve(body);
  });
}).then(function(body){
  fs.writeFileSync('avatar.png', body, 'binary');
})
```
