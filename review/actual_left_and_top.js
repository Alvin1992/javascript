/**
 * getElementLeft & getElementTop
 * @authors Alvin Fan
 * @date    2015-12-01 20:14:43
 * @version $Id$
 */

function getElementLeft(element) {
	var actualLeft = element.offsetLeft,
		current = element.offsetParent;
	while (current !== null) {
		actualLeft += current.offsetLeft;
		current = current.offsetParent;
	}
	return actualLeft;
}

function getElementTop(element) {
	var actualTop = element.offsetTop,
		current = element.offsetParent;
	while (current !== null) {
		actualTop += current.offsetTop;
		current = current.offsetParent;
	}
	return actualTop;
}