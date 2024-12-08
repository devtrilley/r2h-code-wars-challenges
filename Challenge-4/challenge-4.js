/*
  Challenge 4 Prompt:
  Task
  Given an array/list of integers, find the Nth smallest element in the array.

  Notes
  Array/list size is at least 3.
  Array/list's numbers could be a mixture of positives , negatives and zeros.
  Repetition in array/list's numbers could occur, so don't remove duplications.

  Input >> Output Examples
  arr=[3,1,2]            n=2    ==> return 2 
  arr=[15,20,7,10,4,3]   n=3    ==> return 7 
  arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
  arr=[2,1,3,3,1,2],     n=3    ==> return 2 
*/

function nthSmallest(arr, pos) {
  arr = arr.sort((a, b) => a - b); // Sorts array's number from least - greatest.

  return arr[pos - 1]; // Returns the element at then nth-smallest index. Position - 1 will offset to give the correct element array index.
}

console.log(nthSmallest([3, 1, 2], 2));
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3));
console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4));
console.log(nthSmallest([2, 1, 3, 3, 1, 2], 3));

/*
  MY THOUGHTS:

  I utilized thre sort method knowledge that I gained in the last problem then used the position param to find the index of the chosen nth smallest element.
*/