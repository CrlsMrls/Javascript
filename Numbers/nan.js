// NaN (Not a Number) is a numeric value that cannot be represented

var wrongNumber = 5 / 'txt',
	infinite = 5 / 0;


console.log(wrongNumber); // => NaN

// NaN is still a numeric type
console.log(typeof wrongNumber); // => number

// never compare to NaN directly
if (wrongNumber === NaN) console.log('not executing');
else console.log('A NaN differs from another NaN'); // => A NaN differs ...
if (wrongNumber === wrongNumber) console.log('not executing');
else console.log('Actually a NaN differs from itself!'); // => Actually a ...

// compare with isNaN() function
if (isNaN(wrongNumber)) console.log('isNaN works as expected'); // => isNaN works ...

// it also works with strings which are not numbers
if (isNaN('text')) console.log('"text" isNaN');

console.log(infinite); // => Infinity

// careful, Infinity is a number type but not NaN
if (isNaN(infinite)) console.log('not executing');
else console.log('infinite is not a NaN'); // => infinite ...

// check if number is valid and finite
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

console.log(isNumber(wrongNumber)); // => false
console.log(isNumber(infinite)); // => false
console.log(isNumber('-1.5')); // => true
console.log(isNumber(.235)); // => true

