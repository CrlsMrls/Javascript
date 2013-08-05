/** 
Functions are first class objects. So they can:
 - be stored in variables, objects, and arrays
 - be passed as arguments to functions
 - be returned from functions
 - be created dinamically at runtime
 - have methods

 - Plus they can be invoked
*/


// function declaration
function sayHi(text) { 
	console.log('Hi! ' + text ); 
}

// function expression (a.k.a. anonymous function)
var click = function(button) { 
	console.log('clicking ' + button ); 
}

// named function expressions
var show = function showFromInside() { 
	console.log('typeof showFromInside: ' + typeof showFromInside );  
}

// the name of a named function expression can be referenced ONLY from inside its body
console.log('typeof showFromInside: ' + typeof showFromInside );  // => typeof showFromInside: undefined
show(); // => typeof showFromInside: function

// object stores anonymous function as a method
var myObject = {
	talk: function(text) { console.log('talking! ' + text ); }
};

// method invocation
myObject.talk('from method'); // => talking! from method

// function stored in variable
var reference = sayHi;
reference('from reference'); // => Hi! from reference


