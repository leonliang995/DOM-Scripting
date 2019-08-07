#### 4.4.1 childNodes属性
这里有个例子
```javascript

var body_element = document.getElementsByTagName("body")[0];
alert (body_element.childNodes.length) ;


```
childNodes属性获取到的是数组，这两句代码就是查看body元素的子元素的总个数。
然后，书中给出要放在一个函数里，然后调用window.onload方法。
```js

function countBodyChildren(){
var body_element = document.getElementsByTagName("body")[0];
alert (body_element.childNodes.length) ;
}
window.onload=countBodyChildren;

```
这里我实现的时候偷懒了，没有使用window.onload的方法，而是直接执行上述代码，发现报错“找不到childNodes属性”。

想了一下，原因就是我的<script>标签是在<body>之上，也就是说body内的元素在js代码执行之后才会加载，因此报错。解决方法：
1、加上window.onload方法
2、把<script>标签放在<body>标签后面

### 总结
这章主要就是用js和DOM方法去做一个图片库网页，后面一些章节将以此为基础持续进改进。