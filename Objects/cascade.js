// In a cascade, we can call many methods on the same object in sequence in a single statement
// All methods must return 'this'

var turtle = {	
	x : 0,
	y : 0,
	heading : 0,
	printPosition : function() { 
		console.log('x: '+ this.x +', y: '+ this.y +', heading: '+ this.heading); 
		
		// Every method returns a reference to the object 
		return this;
	},
	turnLeft : function() { 
		this.heading -= 90; 
		if (this.heading === -360 ) this.heading = 0;
		return this; 
	},
	turnRight : function() { 
		this.heading += 90;
		if (this.heading === 360 ) this.heading = 0;
		return this; 
	},
	forward : function(steps) { 
		if ( typeof steps !== 'number' ) return this;
		
		switch (this.heading) {
			case 0: 
				this.y += steps;
				break;
			case 90:
			case -270:
				this.x += steps;
				break;
			case -90:
			case 270:
				this.x -= steps;
				break;
			case 180:
			case -180:
				this.y -= steps;
				break;
		}
		return this;
	 }

};

// the result of each invocation can be used for the next invocation
turtle.printPosition(). // => x: 0, y: 0, heading: 0
	turnRight().
	forward(10).
	turnLeft().
	forward(10).
	turnLeft().
	printPosition(). // => x: 10, y: 10, heading: -90
	forward(10).
	turnLeft().
	printPosition(); // => x: 0, y: 10, heading: -180

