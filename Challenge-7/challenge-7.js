/*
  Challenge 7 Prompt:

  Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  // Var that holds Array with no zero in it
  let noZeros = arr.filter((element) => element !== 0);

  // Length of passed in arr minus the length of our noZeros array will tell us how many zeros we took out
  let zerosRemoved = arr.length - noZeros.length;

  // Param 'i' for iterations, meaning how many times you want 0 pushed.

  function pushRepeat(repeats) {
    // Loop that pushes 0 into our filtered array as many times as our repeats.
    for (let i = 0; i < repeats; i++) {
      noZeros.push(0);
    }

    return noZeros; // Returns the array
  }

  return pushRepeat(zerosRemoved); // Returns the returned array to where we call moveZeros.
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

/*
  MY THOUGHTS:

  Using the filter method then pushing the 0's back on the array by using a dynamic for loop was a crafty way to solve this problem. This one was tricky but fun.
*/