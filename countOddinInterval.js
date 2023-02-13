/*Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
 */

const countOdds = (low, high) => {
  let oddNum = 0;
  for (let i = low; i <= high; i++) {
    i % 2 !== 0 ? oddNum++ : null;
  }
  console.log(oddNum);
  return oddNum;
};

countOdds(3, 7);
