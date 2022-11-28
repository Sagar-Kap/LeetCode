/* 
Given an integer x, return true if x is a palindrome, and false otherwise.
*/

const isPalindrome = (x) => {
  let val;
  let numString = x
    .toString()
    .split("")
    .reverse()
    .toString()
    .replace(/[+,-]/g, "");

  const numNumber = Number(numString);

  numNumber === x ? (val = true) : (val = false);
  return val;
};

isPalindrome(1878787);
