// A closure allows a function to access those non-local variables even when invoked outside scope
// if you use the function keyword inside another function, you are creating a closure.

var funct;

var container = function() {
	var innerScopeVar = 123;

	// copying a reference of the function, it also gives access to the actual scope (closure)
	funct = function() { console.log('innerScopeVar: ' + innerScopeVar); };
};

console.log('funct: ' + typeof funct); // => funct: undefined

// invoking the outer function, the inner function is assigned to 'funct'
container(); 
console.log('funct: ' + typeof funct); // => funct: function

// 'innerScopeVar' has a longer lifetime than 'container' because 'funct' keeps the closure
container = null;
funct(); // => innerScopeVar: 123



// careful! closures could create circular references

// bad
var attachClickEvent = function(element, text){

	// 'element' keeps a reference to 'element' and 'text'. The cycle won't be cleaned up by garbage collection
	element.onclick = function() { console.log('cliked! ' + text); };
};

// good
var show = function show(text){
	return function() { console.log('cliked! ' + text); };
};
var attachClickEvent = function(element, text){
	element.onclick = show(text);
};

var button = {};
attachClickEvent(button, 'message');
button.onclick(); // => cliked! message

