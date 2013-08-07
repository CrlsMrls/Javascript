// A closure allows a function to access those non-local variables even when invoked outside scope
// if you use the function keyword inside another function, you are creating a closure.

var fun;

var container = function() {
	var innerScopeVar = 123;

	// copying a reference of the function, it also gives access to the actual scope (closure)
	fun = function() { console.log('innerScopeVar: ' + innerScopeVar) };
};

console.log('fun: ' + typeof fun); // => fun: undefined

// invoking the outer function, the inner function is assigned to 'fun'
container(); 
console.log('fun: ' + typeof fun); // => fun: function

// 'innerScopeVar' has a longer lifetime than 'container' because 'fun' keeps the closure
container = null;
fun(); // => innerScopeVar: 123

