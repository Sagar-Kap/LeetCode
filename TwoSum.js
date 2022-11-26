/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSum = (nums, target) => {
  let a;
  let b;
  nums.forEach((num, index) => {
    nums.forEach((number, secondIndex) => {
      if (index !== secondIndex) {
        if (num + number === target) {
          a = index;
          b = secondIndex;
        }
      }
    });
  });
  console.log([b, a]);
};

twoSum([2, 7, 11, 15], 9);
