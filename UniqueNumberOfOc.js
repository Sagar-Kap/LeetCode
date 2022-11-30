/*
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

*/

const uniqueOccurrences = (arr) => {
  let value = true;
  let compareArray = [];
  let arrayLocal = [];
  arr.map((item) => {
    if (compareArray.includes(item) === false) {
      arrayLocal.push(arr.filter((m) => m === item).length);
      compareArray.push(item);
    }
  });

  arrayLocal.forEach((num) => {
    if (arrayLocal.filter((number) => number === num).length > 1) {
      value = false;
    }
  });

  return value;
};

uniqueOccurrences([1, 2, 111, 111, 2, 2, 2]);
