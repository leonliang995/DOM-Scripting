本章介绍了DOM提供的五个方法：
- getElementById
- getElementByTagName
- getElementByClassName
- getAttribute
- setAttribute

这五个方法在平时写代码十分常用，尤其是前三个，一般都十分了解。

有意思的是setAttribute这个方法，之前接触的比较少。这里有一个值得关注的细节：使用setAttribute对DOM元素属性修改。
```
 var paras=document.getElementsByTagName("p");
    for (var i=0;i<paras.length;i++){
      var title_text=paras[i].getAttribute("title");
      if(title_text){
        paras[i].setAttribute("title","brand new title text");
        alert(title_text);
      }
    }
```
在页面加载完后，我们通过右键网页，查看源代码，会发现DOM元素的属性值仍然是改变之前的。

而控制台的代码显示是改变之后的，为什么会这样？

这是因为DOM自身的工作模式：即先加载文档的静态内容，再动态刷新，动态刷新不会影响文档的静态内容。也是DOM的威力，对页面内容进行刷新却不需要在浏览器内刷新页面。

