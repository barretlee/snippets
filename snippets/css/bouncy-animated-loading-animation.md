---
title: Bouncy 动画
---


演示：

<div class="loader">
    <span></span>
    <span></span>
    <span></span>
</div>
<style>
.loader {
    text-align: center;
    height: 150px;
}
.loader span {
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 10px;
    margin: 50px auto;
    background: black;
    border-radius: 50px;
    -webkit-animation: loader 0.9s infinite alternate;
    -moz-animation: loader 0.9s infinite alternate;
}
.loader span:nth-of-type(2) {
    -webkit-animation-delay: 0.3s;
    -moz-animation-delay: 0.3s;
}
.loader span:nth-of-type(3) {
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
}
@-webkit-keyframes loader {
  0% {
    width: 10px;
    height: 10px;
    opacity: 0.9;
    -webkit-transform: translateY(0);
  }
  100% {
    width: 24px;
    height: 24px;
    opacity: 0.1;
    -webkit-transform: translateY(-21px);
  }
}
@-moz-keyframes loader {
  0% {
    width: 10px;
    height: 10px;
    opacity: 0.9;
    -moz-transform: translateY(0);
  }
  100% {
    width: 24px;
    height: 24px;
    opacity: 0.1;
    -moz-transform: translateY(-21px);
  }
}
</style>

```
<div class="loader">
    <span></span>
    <span></span>
    <span></span>
</div>
```

```
.loader {
    text-align: center;
}
.loader span {
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 10px;
    margin: 50px auto;
    background: black;
    border-radius: 50px;
    -webkit-animation: loader 0.9s infinite alternate;
    -moz-animation: loader 0.9s infinite alternate;
}
.loader span:nth-of-type(2) {
    -webkit-animation-delay: 0.3s;
    -moz-animation-delay: 0.3s;
}
.loader span:nth-of-type(3) {
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
}
@-webkit-keyframes loader {
  0% {
    width: 10px;
    height: 10px;
    opacity: 0.9;
    -webkit-transform: translateY(0);
  }
  100% {
    width: 24px;
    height: 24px;
    opacity: 0.1;
    -webkit-transform: translateY(-21px);
  }
}
@-moz-keyframes loader {
  0% {
    width: 10px;
    height: 10px;
    opacity: 0.9;
    -moz-transform: translateY(0);
  }
  100% {
    width: 24px;
    height: 24px;
    opacity: 0.1;
    -moz-transform: translateY(-21px);
  }
}
```