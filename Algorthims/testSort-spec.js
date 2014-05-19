'use strict';

/** 
  * Test with Jasmine that every sorting strategy is really sorting
  */

describe('Check sorting with', function() {

  var insertionSort = require('./insertionSort.js'),
      mergeSort = require('./mergeSort.js'); 


  sharedBehaviorForSort('insertionSort', insertionSort);
  sharedBehaviorForSort('mergeSort', mergeSort);

  
});


/**
  * Reuse different tests for every sorting strategy:
  * - based on a known array, check the sort result
  * - result array size is the same as before 
  * - every position is less than the next one 
  * - each position from original array is included in ordered array
  * - compare results with Array.prototype.sort()
  */

function sharedBehaviorForSort(sortingStrategyName, sortingStrategy) {

  
  describe( sortingStrategyName, function () {

    var utils = require('./utils.js'),
        randomSize,    // random array length
        arrayOrig,    // original randomized array
        sortedArray; // reference to array where work is performed

        randomSize  = utils.generateRandomInt(10,20);
        
        // array of randomSize length and values between -100 and +100
        arrayOrig = utils.generateRandomArray(randomSize, -100, 100),
        
        // slice creates a copy of array to a new reference
        sortedArray = arrayOrig.slice();
        
        // sort the array using the strategy being tested
        sortedArray = sortingStrategy.sortArray( sortedArray );

    it('- expected array', function () {
      var unorderedArray  = [10,6,7,4,2,6,5,8,1],
          orderedArray    = [1,2,4,5,6,6,7,8,10],
          sortedArray = sortingStrategy.sortArray( unorderedArray );

      expect(sortedArray).toEqual(orderedArray);
    });


    it('- every position is less than next one', function() {
      for(var i = 0; i < sortedArray.length - 1; i++) {
        // 1 is added because repeated numbers
        expect(sortedArray[i]).toBeLessThan(1+sortedArray[i+1]);
      }
    });

    it('- resulting array same size ', function() {
      expect(sortedArray.length).toBe(arrayOrig.length);      
    });

    it('- all original values are included', function() {
      for(var i = 0; i < arrayOrig.length; i++) {
        expect(sortedArray).toContain(arrayOrig[i]);      
      }
    });

    it('- compare with Array.prototype.sort() ', function() {

      function sortNumber(a,b) {
        return a - b;
      }
      expect(sortedArray).toEqual(sortedArray.sort(sortNumber));
    });



  });

}


