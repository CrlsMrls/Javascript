'use strict';


/**
 * In order to test the number of partitions, include this line just after variable declaration for each sort:
 	comparations = comparations + end-start;

  * For examle: 

	function quickSortLast(originalArray, start, end) {
		var ordered = [], a1, a2;
		
		// sum how many comparations is doing. 
		comparations = comparations + end-start;

 * and copy the whole code from this file into the quickSort.js and example files: 10.txt, 100.txt, etc.
 *
 */ 

var fs = require('fs');



function executeQuickSortFrom(quickSortStrategy, fileName, quantityTest) {


	var text = fs.readFileSync(fileName,'utf8');
	var arry = text.split('\r\n');

	for(var i = 0; i<arry.length;i++) arry[i] = Math.floor(arry[i]);


	quick.comparations = -arry.length;
	quickSortStrategy(arry, 0, arry.length);
	
	console.log(quantityTest + ' - ' + comparations + ' comparations' );

}





console.log('\nQuicksort first pivot');
executeQuickSortFrom(quick.quickSortFirst, '10.txt'		, '   10 positions');
executeQuickSortFrom(quick.quickSortFirst, '100.txt'	, '  100 positions');
executeQuickSortFrom(quick.quickSortFirst, '1000.txt'	, ' 1000 positions');
executeQuickSortFrom(quick.quickSortFirst, '10000.txt'	, '10000 positions');

console.log('\nQuicksort last pivot');
executeQuickSortFrom(quick.quickSortLast, '10.txt'		, '   10 positions');
executeQuickSortFrom(quick.quickSortLast, '100.txt'		, '  100 positions');
executeQuickSortFrom(quick.quickSortLast, '1000.txt'	, ' 1000 positions');
executeQuickSortFrom(quick.quickSortLast, '10000.txt'	, '10000 positions');

console.log('\nQuicksort median pivot');
executeQuickSortFrom(quick.quickSortMedian, '10.txt'	, '   10 positions');
executeQuickSortFrom(quick.quickSortMedian, '100.txt'	, '  100 positions');
executeQuickSortFrom(quick.quickSortMedian, '1000.txt'	, ' 1000 positions');
executeQuickSortFrom(quick.quickSortMedian, '10000.txt'	, '10000 positions');

// Results:

// Quicksort first pivot
//    10 positions - 25 comparations
//   100 positions - 615 comparations
//  1000 positions - 10297 comparations
// 10000 positions - 162085 comparations

// Quicksort last pivot
//    10 positions - 29 comparations
//   100 positions - 587 comparations
//  1000 positions - 10184 comparations
// 10000 positions - 164123 comparations

// Quicksort median pivot
//    10 positions - 21 comparations
//   100 positions - 518 comparations
//  1000 positions - 8921 comparations
// 10000 positions - 138382 comparations

