var close = document.querySelector("#close");
var sclose = document.querySelector(".search-close");
var codePreview = document.querySelector("#codePreview");
var codeTypes = document.querySelector("#codeTypes");
var codebox = document.querySelector("#codebox");
var codectt = document.querySelector("#codectt");
var typeList = document.querySelector("#typeList");
var code = document.querySelector("#code");
var progress = document.querySelector("#progress");
var q = document.querySelector("#q");
var qinfo = document.querySelector(".search-info");

var Snippet = {
  cache: {},
  init: function(){
    this.storeData();
    this.bind();
    this.duoshuo();
  },
  storeData: function(){
    var store = {};
    for(var i = 0; i < snippets.length; i++) {
      if(store[snippets[i].type]) {
        store[snippets[i].type].push(snippets[i]);
      } else {
        store[snippets[i].type] = [snippets[i]];
      }
    }
    this.store = store;
    this.initNav();
  },
  initNav: function(){
    var dom = "<ul>", tag = true, type;
    for(var key in this.store) {
      dom += "<li" + (tag ? " class='on'" : "") + "><span data-type=" + key + ">" + key + "</span></li>";
      if(tag) {
        tag = false;
        type = key;
      }
    }
    dom += "</ul>";
    codeTypes.innerHTML = dom;
    this.renderList(type);
  },
  bind: function(){
    var self = this;
    codeTypes.addEventListener("click", function(evt){
      if(evt.target.nodeName.toLowerCase() == 'span') {
        var p = evt.target.parentNode;
        if(p.getAttribute("class") == "on") {
          return;
        }
        var lis = p.parentNode.getElementsByTagName("li");
        for(var i = 0; i < lis.length; i++) {
          if(lis[i].hasAttribute("class")) {
            lis[i].removeAttribute("class");
          }
        }
        p.setAttribute("class", "on");
        self.renderList(evt.target.innerText);
        window.location.hash = "#!/snippets/" + evt.target.getAttribute("data-type");
        close.click();
      }
    });
    typeList.addEventListener("click", function(evt){
      evt.preventDefault();
      if(evt.target.nodeName.toLowerCase() == 'a') {
        var lis = evt.target.parentNode.parentNode.getElementsByTagName("a");
        for(var i = 0; i < lis.length; i++) {
          if(lis[i].hasAttribute("class")) {
            lis[i].removeAttribute("class");
          }
        }
        evt.target.setAttribute("class", "on");
        codePreview.setAttribute("class", "codePreview on");
        var url = evt.target.getAttribute("data-url");
        var title = evt.target.innerText;
        self.showCode(url, title);
        window.location.hash = "#!" + url;
      }
    });
    codebox.addEventListener("click", function(evt){
      if(evt.target.getAttribute("id") == "close") {
        close.click();
      }
    });
    close.addEventListener("click", function(){
      codePreview.setAttribute("class", "codePreview");
    });
    sclose.addEventListener("click", function(){
      document.querySelector("body").removeAttribute("class");
      q.value = "";
      qinfo.style.opacity = 0;
      var type = document.querySelector(".codeTypes li.on span").innerText.toLowerCase();
      self.renderList(type);
    });
    q.onkeypress = q.onkeyup = q.onkeydown = q.onfocus = function(evt) {
      var val = q.value;
      if( !val ) {
        qinfo.style.opacity = 0;
        return;
      }
      document.querySelector("body").setAttribute("class", "search_on");
      close.click();
      var ret = [];
      for(var i = 0; i < snippets.length; i++) {
        if(snippets[i].title.indexOf(val) > -1) {
          ret.push(snippets[i]);
        }
      }
      qinfo.style.opacity = 1;
      if(ret.length) {
        qinfo.innerText = "找到了" + ret.length + "个结果，按 Enter 键展示。";
      } else {
        qinfo.innerText = "没有找到相关内容~";
      }
      if(evt.keyCode == 13) {
        close.click();
        self.renderList("SEARCH", ret);
      }
    };
    document.onkeydown = function(evt){
      if(evt.keyCode == 27) {
        close.click();
      }
    };
    window.onload = function() {
      var hash = window.location.hash;
      if(hash){
        var url = hash.slice(2);
        hash = hash.split("/");
        if(hash[1] == 'snippets' && hash[2]) {
          var dom = document.querySelector('span[data-type="' + hash[2] + '"]');
          if(dom) {
            setTimeout(function(){
              dom.click();
            }, 200);
          }
          hash[3] && setTimeout(function(){
            var link = document.querySelector('a[data-url="' + url + '"]');
            if(link) {
              link.click();
            }
          }, 300);
        }
      }
    };
  },
  renderList: function(type, input) {
    var data = input || Snippet.store[type.toLowerCase()] || {};
    var dom = "<ul>";
    if(type == "SEARCH") {
      dom += "<li class='search-ret'>搜索结果</li>";
    }
    if(data && !data.length) {
      dom += "<li class='search-null'>没有找到相关的 snippet，请重新输入搜索词~</li>";
    }
    for(var i = 0; i < data.length; i++) {
      dom += '<li' + (i % 2 ? ' class="odd"' : '') + '><a href="javascript:void(0);" data-url="' +
        data[i].url + '">'+ data[i].title + (input ? ' <span>( ' + data[i].type + ' )</span>' : '')  + '</a></li>';
    }
    dom += '</ul>';
    typeList.innerHTML = dom;
  },
  showCode: function(url, title){
    var self = this;
    var oldUrl = codebox.getAttribute("data-url");
    if(oldUrl == url) return;
    codebox.setAttribute("data-url", url);
    codebox.setAttribute("data-title", title);
    if(self.cache[url]) {
      codectt.innerHTML = self.cache[url];
      var codes = codectt.querySelectorAll('pre code');
      for(var i = 0; i < codes.length; i++){
        hljs.highlightBlock(codes[i]);
      }
      return;
    }
    // codebox.style.background = "url(http://www.barretlee.com/blogimgs/loading.gif) no-repeat center center";
    self.updateProgress(Math.floor(Math.random() * 20) + 10);
    with(new XMLHttpRequest) {
      open("GET", url + "?_t=" + new Date()*1);
      onreadystatechange = function(){
        if(readyState == 4) {
          self.updateProgress(Math.floor(Math.random() * 30) + 40);
          self.cache[url] = "<h2>" + title + "</h2>" + marked(responseText);
          codectt.innerHTML = self.cache[url];
          var codes = codectt.querySelectorAll('pre code');
          for(var i = 0; i < codes.length; i++){
            hljs.highlightBlock(codes[i]);
          }
          self.updateProgress(Math.floor(Math.random() * 20) + 80);
          // codebox.style.background = "";
        }
      };
      send();
    }
  },
  updateProgress: function(percentage){
    progress.getElementsByTagName("div")[0].style.width = percentage + "%";
    if(percentage >= 80) {
      progress.getElementsByTagName("div")[0].style.width = "100%";
      this.timer && clearTimeout(this.timer);
      setTimeout(function(){
        progress.style.opacity = "0";
        progress.getElementsByTagName("div")[0].style.width = 0;
      }, 100);
    } else {
      progress.style.opacity = "1";
    }
  },
  tongji: function(){

  },
  duoshuo: function(){
    window.duoshuoQuery = {short_name:"barretlee"};
    (function() {
      var ds = document.createElement('script');
      ds.type = 'text/javascript';ds.async = true;
      ds.src = 'http://static.duoshuo.com/embed.js';
      ds.charset = 'UTF-8';
      (document.getElementsByTagName('head')[0]
      || document.getElementsByTagName('body')[0]).appendChild(ds);
    })();
  }
};

Snippet.init();