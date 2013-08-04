// call() method defines the scope that will be used in the function called 
// apply() is identical, but second parameter is an array
 
var spanish = {
	hi: 'hola',
	morning: 'buenos días'
}

var english = {
	hi: 'hello',
	morning: 'good morning'
};

var morningGreetings = function (name) {

	// 'this' access to actual scope on runtime 
	console.log( this.hi + ' ' + name + '! ' + this.morning);
};

// global scope
morningGreetings('Adam'); // => undefined Adam! undefined

// defined scope
morningGreetings.call(english, 'Johan'); // => hello Johan! good morning
morningGreetings.call(spanish, 'Juan'); // => hola Juan! buenos días

