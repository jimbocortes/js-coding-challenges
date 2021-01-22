// Given a string that contains duplicate occurrences of characters,
// remove the duplicate occurrences.

const assert = require("assert");

const removeDuplicate = (str) => {
  const result = str.split("").reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
  return result.join("");
};

assert.deepStrictEqual(removeDuplicate(""), "abcde");
assert.deepStrictEqual(removeDuplicate("abbabcddbabcdeedebc"), "abcde");
