function car(p, n) {
	switch (true) {
		case n == 1:
			p = p * (1-0.2);
			break;

		case n == 2:
			p = p * Math.pow(1-0.2, 2);
			break;

		case n >= 3:
			p = p * Math.pow(1-0.2, 2) * Math.pow(1-0.1, n-2);
			break;
	}
	return p.toFixed(2);
}


console.log(car(1000, 1));
console.log(car(1000, 2));
console.log(car(1000, 3));
console.log(car(1000, 4));

function anotherCar() {
  while (n > 0) p *= n-- > 2 ? .9 : .8
  return p.toFixed(2);
}

console.log(anotherCar(1000, 1));
console.log(anotherCar(1000, 2));
console.log(anotherCar(1000, 3));
console.log(anotherCar(1000, 4));

function theThirdCar(p, n) {
	if (n == 0) {return p.toFixed(2);}
	  p = p - p*(n > 2 ? 0.1 : 0.2);
	  n--;
	  return car(p,n);
}