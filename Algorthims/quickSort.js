'use strict';

/**
 * Quicksort divides a large list into two smaller sub-lists: the low elements and the high elements. 
 * Then it can recursively sort the sub-lists.
 * The sorted result will be stored in place.
 */


var utils = require('./utils.js');

/**
 * Pivot selection: first position of array.
 * @param {array} originalArray - random array, and after finish the sorted array
 * @param {number} start - position where the quickSort starts
 * @param {number} end - position + 1 where the quickSort ends 
 */
function quickSortFirst(originalArray, start, end) {
	var ordered = [], a1, a2;
	
	// if array has only one value, it is ordered! do nothing.

	if( (end-start) > 1){
	
		// select the pivot at the start position and partition the array
		var pivotPos = partition(originalArray, start, start, end );

		quickSortFirst(originalArray, start, pivotPos );
		quickSortFirst(originalArray, pivotPos + 1, end );

	}

}


/**
 * Pivot selection: last position of array.
 * @param {array} originalArray - random array, and after finish the sorted array
 * @param {number} start - position where the quickSort starts
 * @param {number} end - position + 1 where the quickSort ends
 */
function quickSortLast(originalArray, start, end) {
	var ordered = [], a1, a2;
	
	// if array has only one value, it is ordered! do nothing.

	if( (end-start) > 1){
		
		// select the pivot at the end position and partition the array
		var pivotPos = partition(originalArray, end-1, start, end );

		quickSortLast(originalArray, start, pivotPos );
		quickSortLast(originalArray, pivotPos + 1, end );

	}

}


/**
 * Pivot selection: median value of first, last and middle position of array.
 * @param {array} originalArray - random array, and after finish the sorted array
 * @param {number} start - position where the quickSort starts
 * @param {number} end - position + 1 where the quickSort ends
 */
function quickSortMedian(originalArray, start, end) {
	var ordered = [], a1, a2;
	
	// if array has only one value, it is ordered! do nothing.

	if( (end-start) > 1){
	
		// select the median pivot of 1st, middle and last position
		var pivotPos = medianPivot(originalArray, start, end);
		//  partition the array based on choosen pivot
		pivotPos = partition(originalArray, pivotPos, start, end );

		quickSortMedian(originalArray, start, pivotPos );
		quickSortMedian(originalArray, pivotPos + 1, end );

	}

}

/**
 * Consider the first, middle, and final elements of the given array.
 * Identify which of these three elements is the median.
 * @param {array} originalArray - random array, and after finish the sorted array
 * @param {number} start - position where the quickSort starts
 * @param {number} end - position where the quickSort ends
 * @return {number} - position where the choosen pivot is located
 */

function medianPivot(arry, start, end) {
	end = end - 1; // end was not a position, but the length
	var middle = Math.floor( (end-start) / 2 ) + start;
	var pivotPos;

	if(arry[start] < arry[middle] && arry[middle] < arry[end] || arry[start] > arry[middle] && arry[middle] > arry[end]) {
		pivotPos = middle;
	}else if(arry[middle] < arry[start] && arry[start] < arry[end] || arry[middle] > arry[start] && arry[start] > arry[end]) {
		pivotPos = start;
	}else {
		pivotPos = end;
	}

	return pivotPos;

}

/**
 * Swap two positions from array
 * @param {array} arry - array where swap is done
 * @param {number} a - position to swap
 * @param {number} b - position to swap
 */

function swap(arry, a, b) {
	var swapVar = arry[a];
	arry[a] = arry[b];
	arry[b] = swapVar;
}

/**
 * Partition is an in-place implementation 
 * @param {array} arry - random array, when finish the array is divided in two parts, smaller than pivot and bigger than pivot
 * @param {number} pivotPos - position where the pivot is, so it can be reused based on choice of pivot strategy
 * @param {number} start - position where the partition starts
 * @param {number} end - position where the partition ends
 */

function partition(arry, pivotPos, start, end ) {
	var i, pivot;

	pivot = arry[pivotPos];
	swap(arry,pivotPos,start);
	
	i = start+1;

	for ( var j = i; j < end; j++){
		if(arry[j] < pivot) {
			swap(arry,i,j);
			i++;
		}
	}
	swap(arry,start,i-1);
	
	// i-1 is where the pivot is located
	return i-1;

}

/**
 * Generic quickSort function.
 * I use Median strategy, since in tests it works better.
 */
 function quickSort(arry) {
 	quickSortMedian(arry, 0, arry.length);
 }

// export so it can be used externally in node.js 
module.exports = {

  sortArray: quickSort,
  quickSortFirst: quickSortFirst,
  quickSortLast: quickSortLast,
  quickSortMedian: quickSortMedian

}

