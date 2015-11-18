function $(selector, context) {
	var firstChar = selector.charAt(0);
	context = context || document;
	if (firstChar == '#') {
		return document.getElementById(selector.slice(1));
	} else if (firstChar == '.') {
		var arr = [];
		var elem = context.getElementsByTagName('*');
		for (var i = 0; i < elem.length; i++) {
			var classnameArr = elem[i].className.split(' ');
			for (var j = 0; j < classnameArr.length; j++) {
				if (classnameArr[j] == selector.slice(1)) {
					arr.push(elem[i]);
					break;
				}
			};
		};
		return arr;
	} else {
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

			obj.style[attr] = cur + 'px';

			clearInterval(obj.timer);

			fn && fn();
		} else {
			obj.style[attr] = cur + 'px';
		}

	}, 30);
}


function invoke(f, start, interval, end) {
	if (!start) {start = 0}
	if ( arguments.length <= 2) {
		setTimeout(f, start);
	} else {
		setTimeout(repeat, start);
	}
	function repeat() {
		var h = setInterval(f, interval);
		if (end) {setTimeout(function() {clearInterval(h);}, end)};
	}
}



function shake(obj, attr, speed, callback) {
	if (obj.timer) return;
	var cur = parseFloat(getStyle(obj, attr)),
		arr = [],
		n = 0;
	speed > 40 && (speed = 40);
	speed < 3 && (speed = 3);

	for (var i = speed; i > 0; i -= 3) {
		arr.push(i, -i);
	};
	arr.push(0);

	obj.timer = setInterval(function() {
		obj.style[attr] = cur + arr[n] + 'px';
		n++;
		if (n > arr.length - 1) {
			clearInterval(obj.timer);
			obj.timer = null;
			callback && callback();
		}
	}, 30);
}


function addZero(num) {
	return num < 10 ? '0' + num : num;
}





























