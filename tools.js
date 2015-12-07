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

	clearInterval(obj.timerOfMovement);

	var cur = parseFloat(getStyle(obj, attr));

	speed = cur > target ? -Math.abs(speed) : speed;

	obj.timerOfMovement = setInterval(function() {

		cur += speed;
		//条件speed > 0 && cur >= target || speed < 0 && cur <= target也可以判断
		if (Math.abs(cur - target) <= Math.abs(speed)) {

			cur = target;

			obj.style[attr] = cur + 'px';

			clearInterval(obj.timerOfMovement);

			typeof fn == 'function' && fn();
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

function forEach(arr, callback) {
	if (Array.prototype.forEach) {
		arr.forEach(callback);
	} else {
		for (var i = 0; i < arr.length; i++) {
			callback(i, arr[i]);
		}
	}
}

function indexOf(arr, searchValue, searchIndex, bool) {
	var result = [];
	if (arguments.length == 0 || arguments.length == 1) {return -1};
	searchIndex = searchIndex || 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === searchValue) {
			result.push(i);
		}
	}
	switch (true) {
		case result.length == 0:
			return -1;
			break;
		case bool:
			return result;
			break;
		case !bool:
			return result[0];
			break;
	}
}

function first(element){
	var firstElement = element.firstElementChild || element.firstChild;
	if( !firstElement || firstElement.nodeType !== 1 ){
		return null
	}else{
		return firstElement;
	}
};
function last(element){
	var lastElement = element.lastElementChild || element.lastChild;
	if( !lastElement || lastElement.nodeType !== 1 ){
		return null
	}else{
		return lastElement;
	}
}
function next(element){
	var nextElement = element.nextElementSibling || element.nextSibling;
	if( !nextElement || nextElement.nodeType !== 1 ){
		return null
	}else{
		return nextElement;
	}
};
function prev(element){
	var prevElement = element.previousElementSibling || element.previousSibling;
	if( !prevElement || prevElement.nodeType !== 1 ){
		return null
	}else{
		return prevElement;
	}
}

function getOffset(element) {
	var offsetLeft = element.offsetLeft,
		offsetTop = element.offsetTop,
		current = element.offsetParent;
	while (current !== null) {
		offsetLeft += current.offsetLeft + (parseInt(getStyle(current, 'borderLeftWidth')) || 0);
		offsetTop += current.offsetTop + (parseInt(getStyle(current, 'borderLeftHeight')) || 0);
		current = current.offsetParent;
	}

	return {
		offsetL: offsetLeft,
		offsetT: offsetTop
	}
}






















