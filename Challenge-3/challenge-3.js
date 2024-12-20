/*
  Challenge 3 Prompt:
  Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

  For example, if this array were passed as an argument:

  ["Telescopes", "Glasses", "Eyes", "Monocles"]
  Your function would return the following array:

  ["Eyes", "Glasses", "Monocles", "Telescopes"]
  All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

function sortByLength(array) {
  // Return an array containing the same strings,
  // ordered from shortest to longest

  // Sort Method sorts array from shortest to greatest string by using .length property
  return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));

/*
  MY THOUGHTS:

  This problem was review on the sort method for me and taught me more of the compareFunction callback. I now know how to sort my arrays using multiple values other than numbers.
*/
