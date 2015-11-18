//返回函数

var book = {
	"title": "Professional Javascipt",
	"authors": ["Nicholas C.Zakas", "Alvin"],
	edition: 3,
	year: 2011,
	releaseDate: new Date(2011, 11, 1)
};

var json = JSON.stringify(book);

console.log(json);

var bookCopy = JSON.parse(json, function(key, value) {
	if (key == "releaseDate") {
		value = new Date(value);
	}
	return value;
});

console.log(bookCopy); //此时releaseDate被还原成了对象

console.log(bookCopy.releaseDate.getFullYear());