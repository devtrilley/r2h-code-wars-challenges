/*
  Challenge 5 Prompt:

  You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

  Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

  []                                -->  "no one likes this"
  ["Peter"]                         -->  "Peter likes this"
  ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
  ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
  ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
  Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

// names param is an array
function likes(names) {
  // If statement to determine what to do based on names.length
  if (names.length === 0) {
    return "no one likes this"; // if names.length = 0, return this message.
  } else if (names.length === 1) {
    return `${names[0]} likes this`; // if names.length = 1, return this message with the name interpolated.
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`; // if names.length = 2, return this message with the 2 names interpolated.
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`; // if names.length = 3, return this message with the 3 names interpolated.
  } else if (names.length >= 4) {
    // if names.length = 4+, return this message with 2 names and the left over of likes minus those 2, interpolated.
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

console.log(likes(["Peter"]));

console.log(likes(["Jacob", "Alex"]));

console.log(likes(["Max", "John", "Mark"]));

console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
console.log(
  likes([
    "Alex",
    "Jacob",
    "Mark",
    "Max",
    "Leslie",
    "Sam",
    "Jason",
    "Bradley",
    "James",
    "Thomas",
    "Izzak",
    "Israel",
  ])
);

/*
  MY THOUGHTS:

  While this problem seemed difficult at first, I started to find it much more simple once I realized it was simply if statements and interpolation. Overall a fun puzzle to solve!
*/