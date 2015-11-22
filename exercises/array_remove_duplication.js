//遍历数组法
//此方法用到了indexOf，只有js5支持，可在判断是否支持后将封装的方法添加到prototype上
function unique(array) {
	var arr = [];
	for (var i = 0; i < array.length; i++) {
		if (arr.indexOf(array[i]) == -1) {
			arr.push(array[i]);
		}
	}
	return arr;
}

var array = [1,3,3,'1','4', 4, 5];
console.log(unique(array));



//遍历法2
//实现思路：获取没重复的最右一值放入新数组。（检测到有重复值时终止当前循环同时进入顶层循环的下一轮判断）

function unique1(array){
	var r = [];
	for(var i = 0, l = array.length; i < l; i++) {
		for(var j = i + 1; j < l; j++) {
			if (array[i] === array[j]){
				j = ++i;
			}
		}
		r.push(array[i]);
	}
		return r;
}

var array1 = [1,3,3,'1','4',3,5,4,5];
console.log(unique1(array1));



//对象法
//注意：判断是否为js对象的键时，会自动调用toString()，不同的键可能被认为一样，所以还得用indexOf
function unique2(array) {
	var arr = [], obj = {}, val, type;
	for (var i = 0; i < array.length; i++) {
		val = array[i];
		type = typeof val;
		if (!obj[val]) {
			obj[val] = [type];
			arr.push(val);
		} else if (obj[val].indexOf(type) < 0) {
			obj[val].push(type);
			arr.push(val);
		}
	}
	return arr;
}

var array2 = [1,3,3,'1','4', 4, 5];
console.log(unique2(array2));

//单数据类型，此种方法最快，如果需要支持多种类型，需要修改。
/*


Array.prototype.unique = function() {
    var o = {}, i, l = this.length, r = [];
    for(i=0; i<l;i+=1) o[this[i]] = this[i];
    for(i in o) r.push(o[i]);
    return r;
};


Array.prototype.unique = function(){
return Object.keys(this.reduce(function(r,v){ return r[v]=1,r; },{}));
}


*/


//数组下标判断法
//实现思路：如果当前数组的第i项在当前数组中第一次出现的位置不是i，那么表示第i项是重复的，忽略掉。否则存入结果数组。
//从1开始可以少比较一次
function unique3(array) {
	var arr = [array[0]];
	for (var i = 1; i < array.length; i++) {
		if (array.indexOf(array[i]) == i) {
			arr.push(array[i]);
		}
	}
	return arr;
}

var array3 = [1,3,3,'1','4', 4, 5];
console.log(unique3(array3));


//下标判断法2
//思路：如果indexOf 和 lastIndexOf的值相同，则这个元素只在数组中出现一次。和上面那个基本一样
//注意：此方法会保留最后的一个值，所以顺序和原位置不太一样。
function unique4(array) {
	return array.filter(function(item, i, arr) {return i == arr.lastIndexOf(item)});
}
var array4 = [1,3,3,'1','4',5,4,5];
console.log(unique4(array4));


//实现思路：给传入数组排序，排序后相同值相邻，然后遍历时新数组只加入不与前一值重复的值。
//因为不考虑顺序，所以sort方法的排序缺点在此无关紧要。
//必须得从1开始

function unique5(array) {
	array.sort();
	var arr = [array[0]];
	for (var i = 1; i < array.length; i++) {
		if (array[i] !== arr[arr.length -1]) {       //此处也可以用 array[i] !== array[i-1]判断
			arr.push(array[i]);
		}
	}
	return arr;
}

var array5 = [1,3,3,'1','4',5,4,5];
console.log(unique5(array5));

