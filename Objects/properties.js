// properties in objects

var person = {};

// dot notation
person.name = 'Carlos';
console.log(person.name); // => Carlos

// bracket notation
person['gender'] = 'male';
console.log(person['gender']); // => male

// object literals
var person = {
	name: 'Carlos',
	gender: 'male'
}

// check properties of object
console.log('name' in person); // => true
console.log(person.hasOwnProperty('gender')); // => true

// vs. a property from the prototype chain
console.log('toString' in person); // => true
console.log(person.hasOwnProperty('toString')); // => false!!

// enumeration of all properties in object
for(var key in person) {
	console.log(key + ': ' + person[key]); 
	// => name: Carlos
	// => gender: male
}

