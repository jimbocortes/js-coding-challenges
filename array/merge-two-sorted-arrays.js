// Implement a function that merges two sorted arrays into another
// sorted array.

const assert = require("assert");

function mergeArrays(arr1, arr2) {
  let mergedArray = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      mergedArray.push(arr1[i]);
      mergedArray.push(arr2[j]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // if i is lesser or on the last item, slice to add.
  // if j is lesser or on the the last item, slice to add
  if (i <= arr1.length - 1) {
    mergedArray = mergedArray.concat(arr1.slice(i));
  } else if (j <= arr2.length - 1) {
    mergedArray = mergedArray.concat(arr2.slice(j));
  }

  return mergedArray;
}

arr1 = [1, 3, 4, 5];
arr2 = [2, 6, 7, 8];
mergedArray = [1, 2, 3, 4, 5, 6, 7, 8];

assert.deepStrictEqual(mergeArrays(arr1, arr2), mergedArray);

arr1 = [];
arr2 = [];
mergedArray = [];

assert.deepStrictEqual(mergeArrays(arr1, arr2), []);

// Remember!
// - Check if you are using while
// - Check your variables, especially if it's similar sounding
// - Double check your borders
// - concat is immutable

// The time complexity for this algorithm is O(n+m)O(n+m), where nn and mm are the lengths of arr1 and arr2, respectively. This is because both the arrays are iterated over once.
