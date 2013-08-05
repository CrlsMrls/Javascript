// If there is a different number of arguments than there are parameters, no error is raised

var sum = function(a,b) {
	return a + b;
}

console.log( sum(1,2,3,4,5,6) ); // => 3


// The arguments parameter is a collection of all of the arguments passed to the function
var sum = function(){
	var result = 0;
	console.log("arguments.length: " + arguments.length);
	
	for (var i = arguments.length - 1; i >= 0; i--) {
		result += arguments[i];
	};
	return result;
}

console.log( sum(1,2,3) ); // => arguments.length: 3 // => 6

console.log( sum(1,2,3,4,5,6,7,8,9) ); // => arguments.length: 9 // => 45

