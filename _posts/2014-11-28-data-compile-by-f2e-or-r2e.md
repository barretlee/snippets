---
layout: page
title: 数据交给谁来解析，前端还是后端？
tags: 问答 模板渲染
---

<pre>
首先，预编译跟前后端没有关系，预编译一样可以用于后端渲染。

看看下面的测试时间，单位: ms

模板字符串:

    var s = '{{#datas}}{{name}} abcdefg {{type}} {{date}}{{/datas}}';
    
数据对象: 放入100000行数据

    var stack = [];
    for (var i = 0; i < 100000; i++) {
        stack.push({
            name: 'name-' + i,
            type: 'type-' + i,
            date: (new Date()).toLocaleString()
        });
    }
    var datas = {datas: stack};
    
后端渲染:
生成HTML

    var start = Date.now();
    require('hogan').compile(s).render(datas);
    var end = Date.now();
    console.log(end - start);  // 166 ms　我的机器时间
    
前端渲染:
我在这里做了最简单的设定，只把datas转化成字符串

    var start = Date.now();
    JSON.stringify(datas);
    var end = Date.now();
    console.log(end - start);  // 450 ms 我的机器时间
    
结果对比一目了然，你可以把这个测试用其他模板引擎测试一下。

服务器为了前端渲染，对对象的字符串化所消耗的时间，
远远大于　
服务器直接渲染模板生成HTML所花费的时间。
</pre>

这个问题的焦点并不在“放在哪里渲染快”，如果你要考虑这个效率问题，那是不是也得同时思考下：

- 后端渲染完了之后，需要进行网络传输的体积大了，带来的网络损耗和网络传输时间问题

很多场景，尤其是在移动端，我们通常不会把渲染工作交给后端，一方面后端渲染需要时间，一方面庞大的渲染数据传输也有时延，所以就会出现白屏问题。Bigpipe可以一定程度上处理这个问题，不够构架成本略高，用的人偏少。
若把数据交给前端渲染，也存在一定的弊端，比如需求发生变化之后，接口需要调整，前端模板的解析也要跟着一起变化，这样隔着一层接口开发，办事效率就低了很多，因为我们至少要跟开发同学交涉。

nodejs 的出现让模板复用方便了不少，很多时候，让后端渲染一部分（比如首屏部分），后面的工作就交给前端异步去处理。两者结合起来效果才是最佳的。

SEO问题嘛，看产品需求，很多产品优化了 SEO 也没多大作用，如果实在要考虑：

1. 可以使用 pjax / quickling / hash bang 等技术
2. 服务器端根据 UA 输出内容
