function greetingForAllFriends(friends){
	var arr = [];

	if (friends === null || friends.length == 0) {
		return null;
	}

	for (var i = 0; i < friends.length; i++) {
		arr.push('Hello, ' + friends[i] + '!');
	}

	return arr;
}

var friends = ['Alvin', 'Kate', 'Carter', 'Peggy'];

console.log(greetingForAllFriends(friends));

/*
	逻辑与：当如果有一个为null则返回null；
	null的布尔值是false；
	0的布尔值也是false；
 */

function greetingForAllMyFriends(friends) {
	return friends && friends.length ? friends.map(function(f){return 'Hello, '+f+'!'}) : null;
}