// JavaScript has function-level scope, radically different from C, C++, C# or Java.

var x = 1;
console.log(x); // => 1

// Blocks of curly brackets do not define a scope. 
if (true) {
	var x = 2;
	console.log(x); // => 2
}
console.log(x); // => 2


console.log('create temporal scope with a function...');
x = 1;
console.log(x); // => 1
if (true) {

	// Only functions create a new scope.
	(function() {
		var x = 2;
		console.log(x); // => 2
	}());
}
console.log(x); // => 1
