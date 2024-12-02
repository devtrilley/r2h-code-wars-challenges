/*
  Challenge 2 Prompt:
  You are given a string containing a sequence of character sequences separated by commas.

  Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

  If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

  Examples
  "1,2,3"      =>  "2"
  "1,2,3,4"    =>  "2 3"
  "1,2,3,4,5"  =>  "2 3 4"

  ""     =>  NULL
  "1"    =>  NULL
  "1,2"  =>  NULL
*/

// Function takes in a string a param
function array(string) {
  let stringArray = string.split(","); // Using split() to make string an array, split by ","

  // If our array's length is 3+, then remove the first and last items, or else return null
  if (stringArray.length >= 3) {
    stringArray.pop();
    stringArray.shift();
  } else {
    return null;
  }

  let stringAcc = ""; // This is our string Accumulator that we will iterate over

  // forEach method to add string items to our accumulator, to replicate our string again
  stringArray.forEach((stringItem) => {
    stringAcc += ` ${stringItem}`; // Each iteration separated by spaces
  });

  // Returns our string that we accumulated trimmed, removing whitespce in the front and back
  return stringAcc.trim();
}

// Outputs
console.log(array("1,2,3"));
console.log(array("1,2,3,4"));
console.log(array("1,2,3,4,5"));
console.log(array(""));
console.log(array("1"));
console.log(array("1,2"));
