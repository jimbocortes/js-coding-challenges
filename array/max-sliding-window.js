// Given a large array of integers and a window of size w,
// find the current maximum value in the window as the window
// slides through the entire array.

const assert = require("assert");

const maxSlidingWindow = (arr) => {
  let maxValues = [];

  for (let index = 0; index <= arr.length - 3; index++) {
    const currentWindow = arr.slice(index, index + 3);
    const maxValueCurrentWindow = Math.max(...currentWindow);
    maxValues.push(maxValueCurrentWindow);
  }
  return maxValues;
};

assert.deepStrictEqual(maxSlidingWindow([-4, 2]), []);
assert.deepStrictEqual(maxSlidingWindow([-4, 2, -5, 3, 6]), [2, 3, 6]);
