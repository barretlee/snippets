---
titile: 渐变底线
---


演示：
<a href="http://barretlee.com" class="myclass">小胡子哥的个人网站</a>
<style>
a.myclass {
  position: relative;
  padding-bottom: 2px;
  text-decoration: none;
}

a.myclass :hover::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 0;
  height: 1px;
  width: 100%;
  background: #444;
  background: linear-gradient(left, transparent 0%,#444 50%,transparent 100%);
 }
</style>


```
a {
  position: relative;
  padding-bottom: 2px;
  text-decoration: none;
}

a:hover::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 0;
  height: 1px;
  width: 100%;
  background: #444;
  background: linear-gradient(left, transparent 0%,#444 50%,transparent 100%);
 }
 ```