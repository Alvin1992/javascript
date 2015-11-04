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

