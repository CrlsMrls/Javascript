// A closure allows a function to access those non-local variables even when invoked outside scope
// if you use the function keyword inside another function, you are creating a closure.

var fun;

var container = function() {
	var innerScopeVar = 123;

	// copying a reference of the function, it also gives access to the actual scope (closure)
	fun = function() { console.log('innerScopeVar: ' + innerScopeVar); };
};

console.log('fun: ' + typeof fun); // => fun: undefined

// invoking the outer function, the inner function is assigned to 'fun'
container(); 
console.log('fun: ' + typeof fun); // => fun: function

// 'innerScopeVar' has a longer lifetime than 'container' because 'fun' keeps the closure
container = null;
fun(); // => innerScopeVar: 123


// careful! closures could create circular references

// bad
var attachClickEvent = function(element, a){

	// 'element' keeps a reference to 'element' and 'a'. A cycle that won't be cleaned up by garbage collection
	element.onclick = function() { console.log('cliked! ' + a); };
}

// god
var show = function show(a){
	return function() { console.log('cliked! ' + a); };
}
var attachClickEvent = function(element, a){
	element.onclick = show(a);
}

var button = {};
var text = 'text';
attachClickEvent(button,text);
button.onclick(); // => cliked! text

