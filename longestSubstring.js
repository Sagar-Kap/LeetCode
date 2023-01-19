function lengthOfLongestSubstring(s) {
  let left = 0,
    right = 0,
    maxLength = 0;
  let charSet = new Set();

  while (right < s.length) {
    if (!charSet.has(s[right])) {
      charSet.add(s[right]);
      right++;
      maxLength = Math.max(maxLength, right - left);
    } else {
      charSet.delete(s[left]);
      left++;
    }
  }
  console.log(maxLength);
  return maxLength;
}
lengthOfLongestSubstring("dvdf");
