var book = {
	"title": "Professional Javascipt",
	"authors": ["Nicholas C.Zakas", "Alvin"],
	edition: 3,
	year: 2011
};

var jsonText = JSON.stringify(book, function(key, value) {
	switch (key) {
		case "authors":
			return value.join(',');
			break;               //高程此处没有写break，但是json不能重名，所以继续下面的case没有意义，加上break
		case "year":
			return 5000;
			break;
		case "edition":
			return undefined;   //如果想删除某个属性，把它的值改为undefined
			break;
		default:                //一定要有default，否则不满足以上条件的属性无法返回
			return value;
	}
});

console.log(jsonText);


var jsonText1 = JSON.stringify(book, function(key, value) {
		if (key == "year") {
			value = 5000;        //如果上面想用这种写法，得在break前加return value;
		}						//此处是因为先改变值，然后返回
		return value;
	});

console.log(jsonText1);


//如果想添加字符串缩进，但是不想过虑，第二个参数写null
var jsonText2 = JSON.stringify(book, null, 4);
console.log(jsonText2);