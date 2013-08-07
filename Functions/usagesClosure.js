// when an object returns a closure, this closure references that original object. This is very useful in some situations

function vehicle(initalSpeed) {

	// properties of the object that are hidden from outside, but available from closure
	var speed = initalSpeed,
		objective = 0;

	// 'accelerate' can be referenced ONLY from inside 'vehicle' scope
	var accelarate = function() {
		speed += 1; 
		console.log('.');
		if (speed<objective) setTimeout(accelarate, 100);
		else console.log('speed ' + speed + ' achived!')
	}

	// returning this object, it associates the function with object instance methods
	return {
		speedTo: function(objectiveSpeed) {

			// provide parameter for the execution of setTimeout
			objective = objectiveSpeed;
			if (speed<objective) {
				console.log('running at ' + speed + ' accelarting to ' + objective);

				// setTimout executes the inner function without passing arguments but can still access to scope
				setTimeout(accelarate, 100);
			}
		},
		showSpeed: function(name) { console.log( name + ' speed ' +speed); }
	}
}

var car = vehicle(10);

// invoking object methods
car.showSpeed('car'); // => car speed 10
car.speedTo(15);
/* =>
running at 10 accelarting to 15
.
.
.
.
.
speed 15 achived!
*/

