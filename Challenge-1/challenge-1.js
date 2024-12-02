/*
  Challenge 1 Prompt:
  This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

  Explanation:

  square() must return a copy of the array, containing all values squared
  cube() must return a copy of the array, containing all values cubed
  average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
  sum() must return the sum of all array values
  even() must return an array of all even numbers
  odd() must return an array of all odd numbers
  Note: the original array must not be changed in any case!
*/

// TODO
let numbers = [1, 2, 3, 4, 5];

// We use the prototype to make our custom array methods available for all arrays created.

// This method squares elements of an array and returns them in a new array
Array.prototype.square = function (arrItems) {
  return this.map((arrItem) => arrItem * arrItem);
};

// This method cubes elements of an array and returns them in a new array
Array.prototype.cube = function (arrItems) {
  return this.map((arrItem) => arrItem * arrItem * arrItem);
};

// This method takes the average of all elements of an array and returns the mean.
Array.prototype.average = function (arrItems) {
  let sum = this.reduce((acc, num) => {
    return acc + num;
  }, 0);

  return sum / this.length; // This formula returns the average
};

// This method returns the sum of all elements in an array
Array.prototype.sum = function (arrItems) {
  return this.reduce((acc, num) => {
    return acc + num;
  }, 0);
};

// This method returns all even numbers
Array.prototype.even = function (arrItems) {
  return this.filter((item) => item % 2 === 0);
};

// This method returns all odd numbers
Array.prototype.odd = function (arrItems) {
  return this.filter((item) => item % 2 === 1);
};

console.log(numbers.square()); // must return [1, 4, 9, 16, 25]
console.log(numbers.cube()); // must return [1, 8, 27, 64, 125]
console.log(numbers.average()); // must return 3
console.log(numbers.sum()); // must return 15
console.log(numbers.even()); // must return [2, 4]
console.log(numbers.odd()); // must return [1, 3, 5
