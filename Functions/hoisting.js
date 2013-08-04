// function Statement vs. function Expression
// functions are values, so they are also subject to hoisting

// all function statements are moved to the top of the scope
function printPosition() { console.log('1st'); }

printPosition(); // => 2nd!

function printPosition() { console.log('2nd!'); }


// instead, use function expressions
var printColor = function() { console.log('red'); }

printColor(); // => red

printColor = function() { console.log('black'); }

printColor(); // => black

