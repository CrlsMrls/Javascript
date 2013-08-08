// Standard types in Javascript
// - number
// - string
// - boolean
// - function
// - object
// - undefined


// number
var floatNumber = Math.PI;
console.log(typeof floatNumber); // => number

var integerNumber = 69;
console.log(typeof integerNumber); // => number

console.log(typeof NaN); // => NaN: number
console.log(typeof Infinity); // => Infinity: number



// string
console.log(typeof 'text'); // => string



// boolean
var result = true;
console.log(typeof result); // => boolean

result = false;
console.log(typeof result); // => boolean



// function
var isMonday = function() { return false; };
console.log(typeof isMonday); // => function



// object
var vehicle = {
	wheels: 2,
	maxSpeed: 220
}
console.log(typeof vehicle); // => object

var list = [1, 2, 3, 'four']; 
console.log(typeof list); // => object
console.log(list instanceof Array); // => true

console.log(typeof null); // => object



// undefined
console.log(typeof unknown); // => undefined

