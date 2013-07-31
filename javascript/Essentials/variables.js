
// bad 
function multiply(x,y){
	
	// implied global, potential collision 
	value = x * y;
	return value;
}

// good
function sum(x,y){

	var value = x + y;
	return value;
}


var value = 7;
console.log(sum(3,2));
console.log(multiply(3,2));
console.log(value); // 6 instead of 7
