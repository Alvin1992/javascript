function $(selector, context) {
	var firstChar = selector.charAt(0);
	if (firstChar === '#') {
		return document.getElementById(selector.slice(1));
	} else {
		context = context || document;
		return context.getElementsByTagName(selector);
	}
}


function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj)[attr];
	}
}



function doMove(obj, attr, speed, target, fn) {

	clearInterval(obj.timer);

	var cur = parseFloat(getStyle(obj, attr));

	speed = cur > target ? -Math.abs(speed) : speed;

	obj.timer = setInterval(function() {

		cur += speed;
		//条件speed > 0 && cur >= target || speed < 0 && cur <= target也可以判断
		if (Math.abs(cur - target) <= Math.abs(speed)) {

			cur = target;

			clearInterval(obj.timer);
			//先执行了回调函数，从但是后面依然会赋值，因为是两个作用域。
			fn && fn();
		}

		obj.style[attr] = cur + 'px';

	}, 30);
}
