title: css常用奇淫技巧(不断更新)
author: 熊 超
tags:
  - CSS
categories:
  - 前端
date: 2018-08-30 09:43:00
---

### 一、常用技巧

#### 清除浮动
1. 添加新的元素 、应用 clear：both;
2. 父级定义 overflow: auto;
3. 父元素也设置浮动;
4. 使用br标签和其自身的html属性:《br clear="all"/》 clear="all | left | right | none";
5. 最高大上的方法，强烈推荐 parentDom:after{content: " ";display: block;clear: both;}


#### 垂直居中

``` html
<div class="box box1">
  <span>垂直居中</span>
</div>
```
``` css
.box {
  width: 200px;
  height: 200px;
  background: red;
} 
```

##### 方法1：table-cell

``` css 
.box1 {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
```
##### 方法2：display:flex（部分低版本浏览器不兼容）

``` css
.box2 {
  display: flex;
  justify-content:center;
  align-items:Center;
}
```

##### 方法3：绝对定位和负边距(已知元素高度)
``` css
.box3 {position:relative;}
.box3 span {
    position: absolute;
    width:100px;
    height: 50px;
    top:50%;
    left:50%;
    margin-left:-50px;
    margin-top:-25px;
    text-align: center;
}
```

##### 方法4：绝对定位和0(已知元素高度)
``` css
.box {position:relative;}

.box4 span {
  width: 50%; 
  height: 50%; 
  background: #000;
  overflow: auto; 
  margin: auto; 
  position: absolute; 
  top: 0; left: 0; bottom: 0; right: 0; 
}
```

##### 方法5：display:flex和margin:auto
``` css
.box5 {
    display: flex;
    text-align: center;
}
.box5 span {margin: auto;}
```