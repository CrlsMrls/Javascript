// Avoid always global variables, use var

var value;

// bad 
function multiply(x,y){
	
	// implied global, potential collision 
	value = x * y;
	return value;
}

// good
var sum = function (x,y){

	var value = x + y;
	return value;
}


value = 7;

console.log(sum(3,2)); // => 5
console.log(multiply(3,2)); // => 6

// value was modified in multiply function! 6 instead of 7
console.log(value); // => 6
