title: sessionStorage和localStorage解释及区别
author: 熊 超
tags:
  - sessionStorage
  - localStorage
categories:
  - javascript
date: 2018-08-07 14:33:00
---
<!--more-->

###  HTML5的本地存储

HTML5中与本地存储相关的两个重要内容：Web Storage与本地数据库。其中，Web Storage存储机制是对HTML4中cookie存储机制的一个改善。由于cookie存储机制有很多缺点，HTML5不再使用它，转而使用改良后的Web Storage存储机制。本地数据库是HTML5中新增的一个功能，使用它可以在客户端本地建立一个数据库，原本必须保存在服务器端数据库中的内容现在可以直接保存在客户端本地了，这大大减轻了服务器端的负担，同时也加快了访问数据的速度。

#### 本文主要来讲解Web Storage

我们知道，在HTML4中可以使用cookie在客户端保存诸如用户名等简单的用户信息，但是，通过长期的使用，你会发现，用cookie存储永久数据存在以下几个问题：


1.大小：cookie的大小被限制在4KB。

2.带宽：cookie是随HTTP事务一起被发送的，因此会浪费一部分发送cookie时使用的带宽。

3.复杂性：要正确的操纵cookie是很困难的。

针对这些问题，在HTML5中，重新提供了一种在客户端本地保存数据的功能，它就是Web Storage。

#### 具体来说，Web Storage又分为两种：

1.sessionStorage：将数据保存在session对象中。所谓session，是指用户在浏览某个网站时，从进入网站到浏览器关闭所经过的这段时间，也就是用户浏览这个网站所花费的时间。session对象可以用来保存在这段时间内所要求保存的任何数据。

2.localStorage：将数据保存在客户端本地的硬件设备(通常指硬盘，也可以是其他硬件设备)中，即使浏览器被关闭了，该数据仍然存在，下次打开浏览器访问网站时仍然可以继续使用。

这两者的区别在于，sessionStorage为临时保存，而localStorage为永久保存。

#### 到目前为止，Firefox3.6以上、Chrome6以上、Safari 5以上、Pera10.50以上、IE8以上版本的浏览器支持sessionStorage与localStorage的使用。


WebStorage的目的是克服由cookie所带来的一些限制，当数据需要被严格控制在客户端时，不需要持续的将数据发回服务器。

#### WebStorage两个主要目标： 
（1）提供一种在cookie之外存储会话数据的路径。
（2）提供一种存储大量可以跨会话存在的数据的机制。

#### HTML5的WebStorage提供了两种API：localStorage（本地存储）和sessionStorage（会话存储）。

1、生命周期：localStorage:localStorage的生命周期是永久的，关闭页面或浏览器之后localStorage中的数据也不会消失。localStorage除非主动删除数据，否则数据永远不会消失。
　　sessionStorage的生命周期是在仅在当前会话下有效。sessionStorage引入了一个“浏览器窗口”的概念，sessionStorage是在同源的窗口中始终存在的数据。只要这个浏览器窗口没有关闭，即使刷新页面或者进入同源另一个页面，数据依然存在。但是sessionStorage在关闭了浏览器窗口后就会被销毁。同时独立的打开同一个窗口同一个页面，sessionStorage也是不一样的。

2、存储大小：localStorage和sessionStorage的存储数据大小一般都是：5MB

3、存储位置：localStorage和sessionStorage都保存在客户端，不与服务器进行交互通信。

4、存储内容类型：localStorage和sessionStorage只能存储字符串类型，对于复杂的对象可以使用ECMAScript提供的JSON对象的stringify和parse来处理

5、获取方式：localStorage：window.localStorage;；sessionStorage：window.sessionStorage;

6、应用场景：localStoragese：常用于长期登录（+判断用户是否已登录），适合长期保存在本地的数据。sessionStorage：敏感账号一次性登录；

#### WebStorage的优点：

（1）存储空间更大：cookie为4KB，而WebStorage是5MB；

（2）节省网络流量：WebStorage不会传送到服务器，存储在本地的数据可以直接获取，也不会像cookie一样每次请求都会传送到服务器，所以减少了客户端和服务器端的交互，节省了网络流量；

（3）对于那种只需要在用户浏览一组页面期间保存而关闭浏览器后就可以丢弃的数据，sessionStorage会非常方便；

（4）快速显示：有的数据存储在WebStorage上，再加上浏览器本身的缓存。获取数据时可以从本地获取会比从服务器端获取快得多，所以速度更快；

（5）安全性：WebStorage不会随着HTTP header发送到服务器端，所以安全性相对于cookie来说比较高一些，不会担心截获，但是仍然存在伪造问题；

#### WebStorage提供了一些方法，数据操作比cookie方便；
1. setItem（key, value） ——  保存数据，以键值对的方式储存信息。

2. getItem（key） ——  获取数据，将键值传入，即可获取到对应的value值。

3. removeItem（key） ——  删除单个数据，根据键值移除对应的信息。

4. clear（） ——  删除所有的数据

5. key（index） —— 获取某个索引的key

#### cookie 、sessionStorage与localStorage的区别
<table><col width="100"/><tr><th>特性</th><th>cookie</th><th>sessionStorage</th><th>localStorage</th></tr><tr><td>数据生命期</td><td>生成时就会被指定一个maxAge值，这就是cookie的生存周期，在这个周期内cookie有效，默认关闭浏览器失效</td><td>页面会话期间可用</td><td>除非数据被清除，否则一直存在</td></tr><tr><td>存放数据大小</td><td>4K左右（因为每次http请求都会携带cookie）</td><td colspan="2">一般5M或更大<a href="https://www.html5rocks.com/en/tutorials/offline/quota-research/#toc-introduction" target="_blank">详细看这(需科学上网)</a></td></tr><tr><td>与服务器通信</td><td>由对服务器的请求来传递，每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题</td><td colspan="2">数据不是由每个服务器请求传递的，而是只有在请求时使用数据，不参与和服务器的通信</td></tr><tr><td>易用性</td><td>cookie需要自己封装setCookie，getCookie</td><td colspan="2">可以用源生接口，也可再次封装来对Object和Array有更好的支持</td></tr><tr><td>共同点</td><td colspan="3">都是保存在浏览器端，和服务器端的session机制不同<a href="http://blog.csdn.net/fangaoxin/article/details/6952954/" target="_blank">（这里有一篇很好的介绍cookie和session的文章）<a/></td></tr></table>

#### 示例：
（1） 新建两个文件：
![](http://xiongcao.github.io/blogImage/201808081728_587.png)


``` html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <a href="./test.html" target="_blank">跳到test.html</a>
</body>
</html>
<script>
    localStorage.setItem("xiongchao",123);
    sessionStorage.setItem("xiongchao",456);
</script>
```

（2） 部署服务（推荐使用nignx做反向代理,比tomcat简单粗暴，也可以不用这一步，只是为了模拟真实网站会话）

（3） 打开index.html,并使用链接打开test.html
![](http://xiongcao.github.io/blogImage/201808081739_652.png)
![](http://xiongcao.github.io/blogImage/201808081739_523.png)

两个页面的结果是一样的，这是一次会话，sessionStorage储存的内容被保存下来。

（4） 单独打开test.html,会发现sessionStorage是空的。
![](http://xiongcao.github.io/blogImage/201808081739_652.png)
![](http://xiongcao.github.io/blogImage/201808081742_158.png)


