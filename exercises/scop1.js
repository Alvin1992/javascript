
function fun(n,o) {
	alert(o);
	return {
		fun:function(m){
			return fun(m,n);
		}
	};
}

var b = fun(0).fun(1).fun(2).fun(3);
console.log(b);
fun(0):
	undefined;
	{
		fun:function(m){
			return fun(m,n); // n = 0;
		}
	}

fun(1):
	fun(1,0);
	0;
	{
		fun:function(m){
			return fun(m,n);  //n = 1;
		}
	}

fun(2):
	fun(2,0);
	1;
	{
		fun:function(m){
			return fun(m,n); // n = 2;
		}
	}

fun(3):
	fun(3,0)
	2;
	{
		fun:function(m){
			return fun(m,n); // n = 3;
		}
	}
