//normall way

var rand = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

var generateWeightedList = function(list, weight) {
	var weighed_list = [];

	for (var i = 0; i < weight.length; i++) {
		var multiples = weight[i]*1000;
		for (var j = 0; j < multiples; j++) {
			weighed_list.push(list[i]);
		}
	}

	return weighed_list;
}

var list = ['javascript', 'php', 'ruby', 'python'];
var weight = [0.5, 0.2, 0.2, 0.1];
var weighed_list = generateWeightedList(list, weight);


//test
var random_check = {
	javascript: 0,
	php: 0,
	ruby: 0,
	python: 0
};

var random_num
	, item;

for (var i = 0; i < 10000; i++) {
	random_num = rand(0, weighed_list.length-1);
	item = weighed_list[random_num];
	++random_check[item];
}

console.log(random_check);


//more simple way
//compare the max;

var rand = function(min, max) {
	return Math.random() * (max - min) + min;
}

var getRandomItem = function(list, weight) {
	var totalWeight = weight.reduce(function(pre, cur) {return pre + cur});
	var randNum = rand(0, totalWeight);
	var weightSum = 0;
	for (var i = 0; i < list.length; i++) {
		weightSum += weight[i];
		weightSum = +weightSum.toFixed(2);

		if (randNum <= weightSum) {
			return list[i];
		}
	}
}

var list = ['javascript', 'php', 'ruby', 'python'];
var weight = [0.5, 0.2, 0.2, 0.1];



//test
var random_check = {
	javascript: 0,
	php: 0,
	ruby: 0,
	python: 0
};

var random_num
	, item;

for (var i = 0; i < 1000000; i++) {
	item = getRandomItem(list, weight);
	++random_check[item];
}

console.log(random_check);

