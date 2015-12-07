/**
 * getBoundingClientRect
 * @authors Alvin
 * @date    2015-12-01 21:48:37
 * @version $Id$
 */

function getBoundingClientRect(element) {
	function scrollTop() {
		return document.body.scrollTop || document.documentElement.scrollTop;
	}

	if (typeof arguments.callee.offset != 'number') {
		var scrollTop = scrollTop();
		var temp = document.createElement('div');
		temp.style.cssText = 'position:absolute;left:0;top:0;';
		document.body.appendChild(temp);
		arguments.callee.offset = -element.getBoundingClientRect().top - scrollTop;
		document.body.removeChild(temp);
		temp = null;
	}

	var rect = element.getBoundingClientRect(),
		offset = arguments.callee.offset;

	return {
		left: rect.left + offset,
		top: rect.top + offset,
		right: rect.right + offset,
		bottom: rect.bottom + offset
	}
}