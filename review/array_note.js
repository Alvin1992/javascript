
//数组是对象，所有的索引都是属性名，但只有在0～2（32次幂）-2的整数属性名才是索引
//可以为数组建立任何名字的属性，但如果使用的是索引，数组会根据需要更新length
var arr = [];
arr['10'] = 1000;
console.log(arr)
console.log(arr.length)
arr[-1.1] = 100;
console.log(arr);
console.log(arr.length);
arr[11] = 200;
console.log(arr);
console.log(arr.length);

//默认排序排序为字母表顺序
//如果包含null, undefined, undefined在最后，null在前
var arrSort = [1,2,3,15,null,24,undefined];
arrSort.sort();
console.log(arr);

//默认为区分大小写，如果需要不区分大小写，可以先转化
var arrStr = ['ant', 'Bug', 'cat', 'Dog'];
arrStr.sort();
console.log(arrStr);
arrStr.sort(function(a,b) {
	var s = a.toLowerCase();
	var t = b.toLowerCase();
	if (s < t) {return -1};
	if (s > t) {return 1};
	return 0;
});
console.log(arrStr);


//不同于concat，这个方法会将外层的包裹都去掉
var arrToString = [1,2,3,[2,'c'], 4, [5,[6,8,[9,10]]], 7];
console.log(arrToString.toString());


//空数组调用every()返回true, some()返回false;
var arr = [];
var result = arr.every(function(e) {
  return false;
});
console.log(result)






