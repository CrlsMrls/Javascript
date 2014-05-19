/** @module Utility functions for generating arrays */


module.exports = {
  
  /**
   * Generates a random integer between two values 
   * @param {Number} min - Minimum random value
   * @param {Number} max - Maximum random value
   * @returns {Number} - random integer
   */
  generateRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  /**
   * Generates a random array of n positions, internal values are between min and max 
   * @param {Number} n - Array size
   * @param {Number} min - Minimum value of each array value 
   * @param {Number} max - Maximum value of each array value
   * @returns {Number} - generated array
   */
    generateRandomArray: function (n, min, max){
    var randomArray = [n];
    for (var i = 0; i < n; i++) {
      randomArray[i] = this.generateRandomInt(min, max);
    }
    return randomArray;
  }
};


