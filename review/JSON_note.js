var obj = {
	name: 'Kate',
	gender: 'female',
	height: 170,
	character:["beautiful", "assident"],
	className:{
		university: "HU",
		classNum: "two"
	}
};


//第一次调用这个过滤器，传入的键是一个空字符串，而值就是obj对象
//里面的this指向定义该值的对象或数组
// Object { ={...}}
// (an empty string)
// Object { name="Kate",  gender="female",  height=170,  more...}
// name
// Object { name="Kate",  gender="female",  height=170,  more...}
// gender
// Object { name="Kate",  gender="female",  height=170,  more...}
// height
// Object { name="Kate",  gender="female",  height=170,  more...}
// character
// ["beautiful", "assident"]
// "0"
// ["beautiful", "assident"]
// "1"
// Object { name="Kate",  gender="female",  height=170,  more...}
// className
// Object { university="HU",  classNum="two"}
// university
// Object { university="HU",  classNum="two"}
// classNum


var json = JSON.stringify(obj,function(k, v) {
	console.log(this);
	console.log(k);
	if (k == 'name') {
		v = 'Alvin';
	}
	return v;
}, 4);



// Object { ={...}}
// (an empty string)
// Object { name="Kate",  gender="female",  height=170,  more...}
// name
// Object { name="Kate",  gender="female",  height=170,  more...}
// gender
// Object { name="Kate",  gender="female",  height=170,  more...}
// height
// Object { name="Kate",  gender="female",  height=170,  more...}
// character
// ["beautiful", "assident"]
// "0"
// ["beautiful", "assident"]
// "1"
// Object { name="Kate",  gender="female",  height=170,  more...}
// className
// {"name":"Kate","gender":"female","height":170,"character":["beautiful","assident"],"className":123}
// 在进行过滤的时候，属性是对象或者数组的也会执行这个函数，如果这时把值改了，对象或者数组内的就不会存在了。
var jsonCopy = JSON.stringify(obj, function(k, v) {
	console.log(this)
	console.log(k)
	if (k == "className") {
		return 123;
	}
	return v;
});

console.log(jsonCopy);





// Object { name="Alvin",  gender="female",  height=170,  more...}
// name
// Object { name="Alvin",  gender="female",  height=170,  more...}
// gender
// Object { name="Alvin",  gender="female",  height=170,  more...}
// height
// ["beautiful", "assident"]
// "0"
// ["beautiful", "assident"]
// "1"
// Object { name="Alvin",  gender="female",  height=170,  more...}
// character
// Object { university="HU",  classNum="two"}
// university
// Object { university="HU",  classNum="two"}
// classNum
// Object { name="Alvin",  gender="female",  height=170,  more...}
// className
// Object { ={...}}
// (an empty string)
// stringify是从外向内，parse是从内向外（内是从上到下）
var testParse = JSON.parse(json, function(k, v) {
	console.log(this);
	console.log(k);
	return v;
});





//数组中属性名的顺序决定了返回的顺序
var testSecondArgumentOfStringify = JSON.stringify(obj, ["height", "gender", "name"]);

console.log(testSecondArgumentOfStringify);



