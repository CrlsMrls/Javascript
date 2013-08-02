// Avoid JavaScript implicitly typecasts variables when comparing

// == and != only work as expected when compared operands are of the same type
// always use === and !==



var emtpyString = '   \n';  
console.log(typeof emtpyString + ' vs. ' + typeof 0); // => string vs. number

// bad
if( emtpyString == 0 ) console.log('wrong! empty string is not a zero  ...');

// good
if( emtpyString === 0 ) console.log('not executing');



var notDefined;
console.log(typeof notDefined + ' vs. ' + typeof null); // => undefined vs. object

// bad
if( notDefined == null ) console.log('wrong! undefined variable is not a null ...');

// good
if( notDefined === null ) console.log('not executing');



var emtpyObject = {};  
console.log(typeof emtpyObject + ' vs. ' + typeof null); // => object vs. object

// bad although it works
if( emtpyObject != null ) console.log('correct! only because both are the same type');

// good
if( emtpyObject !== null ) console.log('always use === and !== to be safe');
