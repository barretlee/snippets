---
title: nodejs多进程爬虫，榨干CPU
---

```
var cheerio = require('cheerio');
var request = require('request');
var cluster = require('cluster');
var mkdirp = require('mkdirp');
var path = require('path');
var fs = require('fs');

var numCPUs = require('os').cpus().length;
var baseURL = {YOUR_SPIDER_URL};
var catesQueue = [];
var subCateQueue = [];

function run (cates){

  if(cluster.isMaster) {
    Object.keys(cates).forEach(function(cate){
      Object.keys(cates[cate]).forEach(function(subCate){
        catesQueue.push({
          dir: path.join('./pool', cate, subCate),
          url: cates[cate][subCate],
          type: "list"
        });
      });
    });

    while(numCPUs--) {
      var c = cluster.fork();
      if(catesQueue.length) {
        c.send(catesQueue.shift());
        c.on("message", function(msg){
          if(typeof msg === "object") {
            if(msg.type == "list") {
              subCateQueue.push(msg);
            }
            if(catesQueue.length) {
              c.send(catesQueue.shift());
            } else if(subCateQueue.length) {
              var list = subCateQueue.shift();
              list.type = list.dir.indexOf('article') > -1 ? "article" : "imgs";
              c.send(list);
            } else {
              console.log(msg.dir + ' done.');
            }
          } else {
            console.log(msg);
          }
        });
      }
    }
  } else if(cluster.isWorker) {
    process.on('message', function(msg) {
      var type = msg.type;
      var url = msg.url;
      var dir = msg.dir;
      switch(type) {
        case "list":
          getList(url).then(function(data){
            msg.subCatePages = data;
            process.send(msg);
          });
          break;
        case "article":
          if(!fs.existsSync(msg.dir)) mkdirp.sync(msg.dir);
          if(msg.subCatePages && msg.subCatePages.length) {
            getSubCateList(msg).then(function(){
              process.send("\n\n" + msg.dir + " OVER\n\n");
            });
          } else {
            process.send("\n\n" + msg.dir + " OVER\n\n");
          }
          break;
        case "imgs":
        default:
          process.send(msg);
      }
    });
  }
}


// GET sub cate
function getList(url) {

  return new Promise(function(resolve, reject){
    process.send("Process: " + url);
    request({
      url: url,
      timeout: 8E3
    }, function(err, res, body) {
      if(err || !body) {
        resolve(); return
      }
      resolve(cheerio.load(body, {
        normalizeWhitespace: false,
        decodeEntities: false
      }));
    });
  }).then(function($){
    if(!$ || !$.html()) {
      return [];
    }
    var num = +$(".num").eq(0).attr("href").split("_")[2].split(".")[0];
    var ret = [];
    while(num--) {
      ret.push(url.replace(/_\d+/, function($0, $1) {
        return $0 + (num == 0 ? "" : "_" + num);
      }));
    }
    return ret;
  });
}

// GET sub cate list
function getSubCateList(msg) {
  return !msg.subCatePages.length ? Promise.resolve()
  : new Promise(function(resolve, reject){
    var url = msg.subCatePages.shift();
    process.send("getSubCateList Process: " + url + ", type: " + msg.type);
    request({
      url: url,
      timeout: 5E3
    }, function(err, res, body) {
      if(err || !body) {
        resolve(); return
      }
      resolve(cheerio.load(body, {
        normalizeWhitespace: false,
        decodeEntities: false
      }));
    });
  }).then(function($){
    if(!$ || !$.html()) {
      return getSubCateList(msg);
    }
    var details = [];
    $("td a[href^='/article']").each(function(){
      details.push(baseURL + $(this).attr("href"));
    });
    return getContent(details, msg).then(function(msg){
      getSubCateList(msg);
    });
  }).catch(function(){
    return getSubCateList(msg);
  });
}

// GET content
function getContent(queue, msg)  {
  console.log("\n" + queue.length + "\n");
  return !queue.length ? Promise.resolve(msg)
  : new Promise(function(resolve, reject){
    var url = queue.shift();
    process.send("getContent Process: " + url + ", type: " + msg.type);
    request({
      url: url,
      timeout: 5E3
    }, function(err, res, body) {
      if(err || !body) {
        resolve(); return
      }
      resolve(cheerio.load(body, {
        normalizeWhitespace: false,
        decodeEntities: false
      }));
    });
  }).then(function($){
    if(!$ || !$.html()) {
      return getContent(queue, msg);
    }
    if(msg.type == "article") {
      var ctt = $("#MyContent").html();
      var title = $(".title").text();
      if(ctt) {
        ctt = "<style>.body{-webkit-tap-highlight-color:transparent;font-size:16px;color:#2f2f2f;background:#fff;font-family:Georgia,serif;}.content{padding:20px 5%;max-width:700px;margin:0 auto;line-height:1.5}h2{line-height:50px;font-size:24px;}</style><div class='content'><h2>" + title + "</h2>" + ctt + "</div>"
      }
      var file = path.join(msg.dir, title.replace(/[\*\&\\\/\?\|\:\<\>\n\.\ "'\,\（\）]/gim, "").toString() + ".html");
      console.log('File Path: ' + file);
      fs.writeFileSync(file, ctt, 'utf8');
      return getContent(queue, msg);
    } else if(msg.type == "imgs") {
      var pics = [];
      var title = $(".title").text();
      var dir = path.join(msg.dir, title.replace(/[\*\&\\\/\?\|\:\<\>\n\.\ "'\,\（\）]/gim, "").toString());
      if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      $("#MyContent img").each(function(){
        var src = $(this).attr("src");
        if(src && (pics.indexOf(src) == -1)) {
          var file = path.join(dir, src.slice(src.lastIndexOf("/") + 1));
          console.log('File Path: ' + file);
          request(url).pipe(fs.createWriteStream(file));
        }
      });
      return getContent(queue, msg);
    }
  }).catch(function(){
    return Promise.resolve(msg);
  });
}

// function getImg(queue, dir){

// }

if(cluster.isMaster) {
  // Get the main categories.
  var categories = {};
  var promise = new Promise(function(resolve, reject){
    request(baseURL, function(err, res, body){
      resolve(body);
    });
  }).then(function(data){
    var $ = cheerio.load(data, {
      normalizeWhitespace: false,
      decodeEntities: false
    });
    var cates = {};
    $("#menu_box ul").each(function(){
      var cate;
      var subCate = {};
      var links = $(this).find("li a");
      if(links.length) {
        links.each(function(){
          var text = $(this).text();
          var href = $(this).attr('href');
          if(href && href.indexOf('/') > -1) {
            subCate[text] = baseURL + href;
          } else {
            cate = text;
          }
        });
        cates[cate] = subCate;
      }
    });
    // Enter spider
    console.log("Start Spider Man");
    run(cates);
  });
} else {
  run();
}
```
