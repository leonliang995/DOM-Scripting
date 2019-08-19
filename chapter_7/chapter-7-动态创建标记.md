---
title: chapter-7-动态创建标记
date: 2019-08-15 08:10:55
tags:
---


#### 主要内容
本章主要讲了动态创建html标记的几个方法，主要包括两类：

* 传统技术：document.wirte 和 innerHTML
* DOM方法：createElement、createTextNode、appendChild、insertBefore。

还简单介绍了Ajax。



#### 1、传统方法

传统方法使用较少。

document.write使用时，文档中必须有<script>标签承载html标记，违背了行为表现分离原则。

innerHTML属于粗放型，把所有标记当做字符串插入，适合插入一大段内容。
#### 2、DOM方法
使用DOM方法的核心就是要站在DOM节点树的角度考虑，并不是在创建标记，而是在改变节点树。

* createElement：创建元素节点。
  
```js
document . createElement ("nodeName")
```
* createTextNode：创建文本节点
```js
document . createTextNode ("text")
```
* appendChild：添加为子节点
```js
parent . appendChild( child )
```
* insertBefore：把一个新元素插入到现有元素的前面
```js
parentElement . insertBefore (newElement , targetElement )
```
还有自己动手实现insertAfter方法，这个方法关键在利用insertBefore方法，即如果目标元素不是父元素的最后一个方法，那就把新元素插入到目标元素和他的下一个兄弟元素之间。

#### Ajax
Ajax 的优势就是可以做到只更新页面一小部分，对页面的请求用异步的方式发送到服务器。而服务器在后台处理，不影响用户干其他事。

Ajax核心就是XMLHttpRequest对象，相当于客户端和服务器的中间人。

使用时要注意的就是同源策略。就是只能访问与其所在的HTML处于同一个域中的数据。

在实验时还要注意的就是Ajax有限制协议，具体到这里就是实验时打开文件，用的是file协议，这时候就会报错。解决办法就是
右击chrome快捷方式，选择“属性”，在“快捷方式”下的“目标”中添加" --allow-file-access-from-files"(最前面有个空格)，重启chrome即可。