---
layout: page
title: 解析URL到对应的Object
tags: 解析 JavaScript
---

将 URL 中对象解析出来：

    var a='account.type=1&account.id=&account.dependFlag=0&account.card.companyId=1&account.name=%E4%B8%AD%E9%93%B6VISA%E5%8D%A1&account.hidden=&account.card.cardNo=&account.moneyTypeId=0&account.card.billDay=1&account.card.repayType=0&account.card.repayDay=20&account.card.alert=2&account.comment=%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D';
    
    var root={};
    
    a.split('&').sort().map(function(s){
        var p=root;
        s.match(/(.+?)(?:\.|=)/g).map(function(ss){
            var t=ss.slice(0,-1);
            p[t]=p[t]||((ss.slice(-1)==='=')?decodeURIComponent(s.match(/=(.*)$/)[1]):{});
            p=p[t];
        });
    });
    
    console.log(root);
    
以上是网友的答案，我暂时没想到更好的算法。
