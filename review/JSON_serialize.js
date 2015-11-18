// toJSON方法

var book = {
	"title": "Professional Javascipt",
	"authors": ["Nicholas C.Zakas", "Alvin"],
	edition: 3,
	year: 2011,
	toJSON: function() {
		return this.title;
	}
};


var jsonText = JSON.stringify(book);

console.log(jsonText);

/*

 *可以让toJSON返回任何值，它都能正常工作
 *如果返回undefined，如果包含它的对象嵌入要另一个对象中，会导致它的值变成null
 *如果它是顶级对象，结果就是undefined。

 */