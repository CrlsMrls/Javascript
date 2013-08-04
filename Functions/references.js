/** 
Functions are objects, therefore referenced. So they can:
 - be stored in variables, objects, and arrays
 - be passed as arguments to functions
 - be returned from functions
 - be created dinamically at runtime
 - have methods

 - Plus they can be invoked
*/

// assign anonymous function to variable
var addNumbers = function (a, b) {
	return a + b;
};

// assign named function expression to variable
var subtractNumbers = function subtract (a, b) {
	return a - b;
}

// the name of a named function expression can be referenced only from inside its body
console.log( 'typeof subtract: ' + typeof subtract ); // => typeof subtract: undefined

// object stores anonymous function as a method
var myObject = {
	dummyProperty: 0 ,
	sayHi: function (str) {
		console.log('Hi! ' + str );
	}
};

// method invocation
myObject.sayHi('from method'); // => Hi! from method

// variable pointing to an anonymous method
var reference = myObject.sayHi;
reference('from reference'); // => Hi! from reference

// store functions in arrays
var myArray = [myObject.sayHi, addNumbers, subtractNumbers];
myArray[0]('from array'); // => Hi! from array
console.log(myArray[1](3,2)); // => 5
console.log(myArray[2](3,2)); // => 1

