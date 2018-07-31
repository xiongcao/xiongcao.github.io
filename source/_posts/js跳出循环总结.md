title: js跳出循环总结
author: 熊 超
tags:
  - Array
  - 循环
categories:
  - 前端
  - javascript
date: 2018-07-31 09:53:00
---

## 一.跳出一层循环
```js
var arr = ["a", "b",'c','d'];
```
### 结束for循环
```js
for(var i=0;i<arr.length;i++){
  if(i==2){
      break;
  }
  console.log(arr[i],i);
}
console.log('循环外');
```
注意：return 虽说可以结束循环，但是循环体后面的内容也无法执行了

### 结束forEach循环
```js
try {
    arr.forEach((o,i) => {
        if(i==2){
            throw new Error("EndIterative");
        }
        console.log(o,i);
    });
} catch (e) {
    if(e.message!='EndIterative'){
        throw e;
    }
}
console.log('循环体外');
```

注意：return 只能结束本次循环，并不能终止整个循环

### 结束for...in循环
```js
for (var i in arr) {
    if(i==2){
        break;
    }
    console.log(arr[i],i);
}
console.log('循环体外');
```
注意：return 虽说可以结束循环，但是循环体后面的内容也无法执行了

#####结果：
![mark](http://or87vteh1.bkt.clouddn.com/201807311448_240.png)

## 二.跳出多层循环
```js
var arr = [["a","b"],["小红","小明"]];
```
### 正常多层for循环
```js
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j], '内层');
    }
    console.log(arr[i], "外层");
}
```
#####结果：
![mark](http://or87vteh1.bkt.clouddn.com/201807311604_363.png)

### 使用break跳出for循环
```js
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if(j==i){
          break;
      }
      console.log(arr[i][j], '内层');
    }
    console.log(arr[i], "外层");
}
```
结果： 只跳出了一层循环

![mark](http://or87vteh1.bkt.clouddn.com/201807311606_181.png)

### 使用return跳出for循环
```js
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if(j==i){
          return;
      }
      console.log(arr[i][j], '内层');
    }
    console.log(arr[i], "外层");
}
console.log('我在循环体外');
```
结果： 虽然跳出了多层循环，但是循环体后面的内容都没有被执行

![mark](http://or87vteh1.bkt.clouddn.com/201807311646_81.png)

### 使用return跳出forEach循环
```js
arr.forEach((newArr,i) => {
    newArr.forEach((o,j)=>{
        if(j==1){
            return;
        }
        console.log(o,'内层')
    });
    console.log(newArr,'外层');
});
console.log('循环体外');
```
结果： 正确跳出了多层循环
![mark](http://or87vteh1.bkt.clouddn.com/201807311704_205.png)



