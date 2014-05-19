'use strict';

var utils = require('./utils.js');

/**
 * Merge sort divides the unsorted array into sublists, each containing 1 element.
 * Repeatedly merge sublists to produce new sorted sublists.
 */
function mergeSort(originalArray){
	var ordered = [], a1, a2;

	// if only one value, array is ordered
	if(originalArray.length <= 1){
		ordered = originalArray;
	} else {
	
		a1 = mergeSort(originalArray.slice(0, Math.floor(originalArray.length/2)));
		a2 = mergeSort(originalArray.slice(Math.floor(originalArray.length/2), originalArray.length));
		
		for( var i = 0; i < originalArray.length; i++){
			if(!a1.length)  ordered[i] = a2.shift();
			else if(!a2.length)  ordered[i] = a1.shift();
			else if(a1[0]<a2[0]) ordered[i] = a1.shift();
			else ordered[i] = a2.shift();
		}
	}

	return ordered;
}

// export so it can be used externally in node.js 
module.exports = {
  sortArray: mergeSort
}

// usage
// var arr = utils.generateRandomArray(10, 0, 100);
// console.log(arr);
// console.log(mergeSort(arr));
