title: js Date对象的详细使用
author: 熊 超
tags:
  - js
  - date
categories:
  - 前端
  - javascript
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


## 二：Date()对象组合高级用法：

```js
//将毫秒转换为yyyy-MM-dd HH:mm:ss日期格式
function dateFormat(seconds) {
    let date = new Date(seconds),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDay(),
        hour = date.getHours(),
        min = date.getMinutes(),
        s = date.getSeconds();
    return `${year}-${formatNum(month)}-${formatNum(day)} 					${formatNum(hour)}:${formatNum(min)}:${formatNum(s)}`;
}

//转换为yyyy-MM-dd日期格式
function dateFormatShort(date) {
    let year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDay();
    return `${year}-${formatNum(month)}-${formatNum(day)}`;
}

//将yyyy-MM-dd HH:mm:ss转化为毫秒数
function formatMilliseconds(str){
    // str = '2018-7-19 15:14:30';
    str = str.replace(/-/g,'/');//由于部分浏览器以及一些低版本浏览器不兼容new Date(yyyy-MM-dd HH:mm:ss)
    let date = new Date(str);
    return date.getTime();
}

//获取两个时间的秒数差
function SecondsDiff(startDate,endDate){
    startDate = "2018-7-18 10:56:23",endDate = "2018-7-19 12:00:00";
    let startTime = formatMilliseconds(startDate),//获得毫秒数
        endTime = formatMilliseconds(endDate),
        milliseconds = endTime - startTime;//毫秒数之差
    return parseInt(milliseconds/1000);
}

//根据剩余秒数获取剩余HH:mm:ss（应用在活动倒计时或物品过期还有多久'dd天HH小时'）
function secondsFormat(seconds){
    seconds = SecondsDiff();
    let day = Math.floor(seconds / 3600 / 24),
        hour = Math.floor((seconds % 86400) / 3600),
        min = Math.floor((seconds % 86400 % 3600) / 60 ),
        second = Math.floor(seconds % 86400 % 3600 % 60);
        hour += day * 24;
    return `${formatNum(hour)}:${formatNum(min)}:${formatNum(second)}`;//为什么只计算天数,因为一般活动只在相邻几天
}
    
//获得某月的天数　　 
function getMonthDays(year, month) {
    let nowDate = new Date(year,month,0),
        days = nowDate.getDate();
    return days;
}

//补0操作
function formatNum(e) {
    return e >= 10 ? e : `0${e}`;
}
	
    
```
