---
title: chapter-6-图片库改进
date: 2019-08-14 11:15:29
tags:
---
#### 主要内容
利用第五章学到的原则和方法，去改造第四章的图片库案例。

* 通过引入大量测试和检查，来避免做出太多假设，比如检查getElementById等方法是否存在。（不知道现在要不要这么麻烦）
* 尽可能的把JS和HTML分离开来，主要把事件处理函数分离出来了。

#### 印象深刻的地方
1、本章代码增加了大量检查代码，对使用到的行为逐一增加检查，检查是否支持，导致现在的代码就已经变得很冗长。不知道现在的js代码还需不需要这么做，或者说有更好的替代方法。

2、 提到了DOM Core和HTML-DOM

 比如说：getElementById、getElementsByTagName、getAttribute、setAttribute这四个方法就属于DOM Core。
 
 比如说：onclick等方法，属于HTML-DOM。
 
 DOM Core是支持DOM的任何一种程序设计语言都可以使用，而且它们可以用来处理任意一种标记语言，比如XML等，编写的文档。
 
 HTML-DOM提供了许多描述各种HTML元素的属性，代码通常会更短，但是它们只能用来处理Web文档。
 
 比如用DOM Core：
 
```js
var source = whichpic.getAttribute("href");
```
而如果用HTML-DOM：
```js
var source = whichpic.href;
```
虽然HTML-DOM代码更短，但是作者在书中说喜欢用DOM Core，因为DOM Core方法更容易使用。
本人理解就是说DOM Core的适用范围更广，不容易出错。