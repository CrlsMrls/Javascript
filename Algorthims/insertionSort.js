'use strict';

var utils = require('./utils.js');

/**
 * Insertion sort iterates, consuming one input element each repetition.
 * Each iteration, it removes one element from the input data, finds
 * the location it belongs within the sorted list, and inserts it there. 
 * It repeats until no input elements remain.
 */
function insertionSort(originalArray){

  var i, j, key;

  for (i = 1; i < originalArray.length; i++) {
    key = originalArray[i];
    j = i - 1;
    while( key < originalArray[j] && j >= 0 ){
      originalArray[j+1] = originalArray[j];
      j--;
    }
    originalArray[j+1] = key;
  }

  return originalArray;

}

// export so it can be used externally in node.js 
module.exports = {
  sortArray: insertionSort
}

// usage
// var arr = utils.generateRandomArray(10, 0, 100);
// console.log(arr);
// console.log(insertionSort(arr));

