/** 
Functions are objects, therefore referenced. So they can:
 - be stored in variables, objects, and arrays
 - be passed as arguments to functions
 - be returned from functions
 - be created dinamically at runtime
 - have methods

 - Plus they can be invoked
*/


var myObject = {

	// function as a method
	sayHola: function (str) {
		console.log('Hola! ' + str );
	}
};

// invoked
myObject.sayHola('method'); // => Hola! method

// store in arrays
var myArray = [myObject.sayHola];
myArray[0]('array'); // => Hola! array

// reference
var reference = myObject.sayHola;
reference('reference'); // => Hola! reference

