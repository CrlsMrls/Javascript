// objects are passed by reference, not copied

var person = {
	name: 'Carlos',
	gender: 'male'
}

var updateName = function ( personObj, newName) {
	
	// affects original object
	personObj.name = newName;
}

console.log(person.name); // => Carlos
updateName(person, 'Charles');
console.log(person.name); // => Charles

// 'me' and 'person' refer to the same object, not copied!
var me = person;
me.name = 'Carlos';
console.log(person.name); // => Carlos

