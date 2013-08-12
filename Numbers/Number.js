// Number object allows to work with numerical values

var n = 12345.6789;

// formating a number into a string
// 'toString' parameter defines the base
console.log(n.toString()); // => 12346
console.log(n.toString(2)); // => 11000000111001.101011011100110001100011111100010100001

// 'toFixed' parameter defines the number of decimal places 
console.log(n.toFixed()); // => 12346
console.log(n.toFixed(2)); // => 12346.68

// 'toPrecision' parameter defines the number of digits
console.log(n.toPrecision()); // => 12346.6789
console.log(n.toPrecision(2)); // => 1.2e+4

// 'toLocaleString()' is compatible with Chrome and IE, but not with node.js or Firefox (Aug 2013)
console.log(n.toLocaleString("en-IN")); // => 12345.6789 (node.js) // => 12,345.679 (Chrome)
console.log(n.toLocaleString("de-DE", {style: "currency", currency: "EUR"})); // => 12345.6789 (node.js) // => 12.345,679 € (Chrome)
// better use third party, like goog.i18n package 


console.log(Number.MAX_VALUE); // => 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // => 5e-324

console.log(Number.POSITIVE_INFINITY); // => Infinity
console.log(Number.NEGATIVE_INFINITY); // => Infinity

if(Number.POSITIVE_INFINITY === Infinity) console.log('Both are the same'); // => Both are ...


