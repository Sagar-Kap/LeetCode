/*


Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

const longestCommonPrefix = (strs) => {
  let prefix = "";
  let word1 = strs[0].split("");

  if (strs.length === 1) {
    console.log("No match");
    return strs[0];
  }
  const word2 = strs[1].split("");
  for (let j in word1) {
    if (word1[j] === word2[j]) {
      prefix += word1[j];
    } else {
      break;
    }
  }

  if (prefix !== "") {
    if (strs.length > 2) {
      for (let i = 2; i < strs.length; i++) {
        let another = "";
        const wordCheck = strs[i].split("");
        const prefixArr = prefix.split("");
        for (let k = 0; k < prefixArr.length; k++) {
          if (prefixArr[k] === wordCheck[k]) {
            another += prefixArr[k];
          } else {
            prefix = another;
            break;
          }
        }
      }

      console.log(prefix);
      return prefix;
    }
  } else if (prefix === "") {
    console.log("No match");
    return prefix;
  }
  console.log(prefix);
  return prefix;
};

const strs = ["flower", "flow", "flight"];

longestCommonPrefix(strs);
