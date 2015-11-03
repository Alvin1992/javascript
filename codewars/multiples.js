// function multiple(x) {
// 	if (x % 49 == 0 && x % 3 == 0) {
// 		return 'Fang';
// 	} else if (x % 7 == 0) {
// 		return 'Fizz';
// 	} else if (x % 15 == 0) {
// 		return 'Foo';
// 	} else {
// 		return 'Far';
// 	}
// }

function multiples(x) {
	switch (true) {
		case x % 49 == 0 && x % 3 == 0:
			return 'Fang';
			break;

		case x % 7 == 0:
			return 'Fizz';
			break;

		case x % 15 == 0:
			return 'Foo';
			break;

		default:
			return 'Far';
	}
}

console.log(multiples(147));
console.log(multiples(14));
console.log(multiples(30));
console.log(multiples(2));

function anotherMultiples(x) {
  var result = x % 49 == 0 && x % 3 == 0 ? 'Fang' : x % 7 == 0 ? 'Fizz': x % 15 == 0 ? 'Foo': 'Far';
  return result;
}

console.log(anotherMultiples(147));
console.log(anotherMultiples(14));
console.log(anotherMultiples(30));
console.log(anotherMultiples(2));


