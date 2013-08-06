// If there is a different number of arguments than there are parameters, no error is raised

var sum = function sumName(a,b) {

	console.log("expecting "+ sumName.length + " arguments, but received " + arguments.length);
	return a + b;
}

// no error is given
var value = sum(1,2,3,4,5,6,7,8,9); // => expecting 2 arguments, but received 6

console.log( value ); // => 3


// The 'arguments' variable is an array of all of the arguments passed to the function
sum = function(){
	var result = 0;
	for (var i = arguments.length - 1; i >= 0; i--) {
		result += arguments[i];
	};
	return result;
}

console.log( sum(1,2,3) ); // => 6
console.log( sum(1,2,3,4,5,6,7,8,9) ); // => 45

