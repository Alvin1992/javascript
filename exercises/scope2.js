function fun(n,o) {
	console.log(o);
	return {
		fun:function(m){
			return fun(m,n);
		}
	};
}
var c = fun(0).fun(1);
/*undefined;
0;
n = 1;*/

cosnole.log(c);

c.fun(2);
/*1;
n = 2;*/

c.fun(3);

/*1;
n = 3;*/





