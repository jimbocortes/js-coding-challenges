// Remove even numbers without create a new array

const assert = require("assert");

function removeEvenNumbers(arr) {
  if (arr.length == 0) {
    return arr;
  }

  let iterator = 0;

  while (iterator < arr.length) {
    // if even
    if (arr[iterator] % 2 === 0) {
      arr.splice(iterator, 1);
    } else {
      iterator++;
    }
  }

  return arr;
}

let emptyArray = [];
assert.deepStrictEqual(emptyArray, []);

let x = [1, 2, 4, 5, 10, 6, 3];
let xResult = removeEvenNumbers(x);
assert.deepStrictEqual(xResult, [1, 5, 3]);
