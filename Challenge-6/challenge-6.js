/*
  Challenge 6 Prompt:

  Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

  Example
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  The returned format must be correct in order to complete this challenge.

  Don't forget the space after the closing parentheses!
*/

function createPhoneNumber(numbers) {
  // .splice() modifies the original array, which is why each time we splice from index 0 each time.
  let areaCode = numbers.splice(0, 3); // First 3 digits of phone number
  let nextThree = numbers.splice(0, 3); // Middle 3 digtis of phone number
  let lastFour = numbers.splice(0, 4); // Last four digits of phone number

  // Function simulating a spread operator, making each number sequence a string
  function spread(arr) {
    let acc = ""; // Accumulator for our strings

    // forEach method to iterate through arrays (areaCode, nextThree, lastFour)
    arr.forEach((num) => {
      acc += num;
    });

    return acc; // Accumulator will then build a string of the numbers in each array
  }

  return `(${spread(areaCode)}) ${spread(nextThree)}-${spread(lastFour)}`; // Using interpolation, we run spread() in our string and get the phone number that we  want.
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // "(111) 111-1111"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
