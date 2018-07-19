title: js Date对象的详细使用
author: 熊 超
tags:
  - js
  - date
categories:
  - 前端
date: 2018-07-19 11:44:00
---
## 前言：
&ensp;&ensp;&ensp;&ensp;最近发现Date对象在项目中真的是无处不在，几乎做过的所有项目中都有Date的各种用法，然而每次要使用的时候都是各种百度，自己既没有掌握Date的详细用法，也使得每次做项目都浪费很多时间，所以特此研究一下记录下来。




## 一：Date()对象方法示例：


### Date()：返回当日的日期和时间。
```js
Date()	//Thu Jul 19 2018 10:46:06 GMT+0800 (中国标准时间)
```


### getDay()：从 Date 对象返回一周中的某一天 (0 ~ 6)。
```js
var date = new Date();
date.getDay();		//4 今天是星期四
```

<!--more-->

### getFullYear()：从 Date 对象以四位数字返回年份。
```js
var date = new Date();
date.getFullYear();		//2018
```

### getMonth()：从 Date 对象返回月份 (0 ~ 11)。
```js
var date = new Date();
date.getMonth();		//6
```

### getDate()：从 Date 对象返回一个月中的某一天 (1 ~ 31)。
```js
var date = new Date();
date.getDate();		//19
```

### getHours()：返回 Date 对象的小时 (0 ~ 23)。
```js
var date = new Date();
date.getHours();		//10
```

### getMinutes()：返回 Date 对象的分钟 (0 ~ 59)。
```js
var date = new Date();
date.getMinutes();		//53
```

### getSeconds()：返回 Date 对象的秒数 (0 ~ 59)。
```js
var date = new Date();
date.getSeconds();		//5
```

### getMilliseconds()：返回 Date 对象的毫秒(0 ~ 999)。
```js
var date = new Date();
date.getMilliseconds();		//522
```

### getTime()：返回 1970 年 1 月 1 日至今的毫秒数。
```js
var date = new Date();
date.getTime();		//1531968785522
```

### setFullYear()：设置 Date 对象中的年份（四位数字）。
```js
var date = new Date();
date.setFullYear(1995); //1531968785522
```

### setMonth()：设置 Date 对象中月份 (0 ~ 11)。
```js
var date = new Date();
date.setMonth(8); //Wed Sep 19 2018 11:51:48 GMT+0800 (中国标准时间)
```

### setDate()：设置 Date 对象中月的某一天 (1 ~ 31)。
```js
var date = new Date();
date.setDate(25); //Wed Jul 25 2018 11:52:15 GMT+0800 (中国标准时间)
```

### setTime()：以毫秒设置 Date 对象。
```js
//向 1970/01/01 添加 77771564221 毫秒，并显示新的日期和时间：
var date = new Date();
date.setTime(77771564221); 
console.log(date) //Mon Jun 19 1972 11:12:44 GMT+0800 (中国标准时间)
```

### toTimeString()：把 Date 对象的时间部分转换为字符串。
```js
var date = new Date();
date.toTimeString(); => 11:58:45 GMT+0800 (中国标准时间)
``` 

### toDateString()：把 Date 对象的日期部分转换为字符串。
```js
var date = new Date();
console.log(date.toDateString()); => Thu Jul 19 2018
```