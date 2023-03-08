const isValid = (s) => {
  if (s.length % 2 !== 0) {
    console.log(false);
    return false;
  }
  const stack = [];
  const openBrackets = ["(", "{", "["];
  const closeBrackets = [")", "}", "]"];
  for (let i = 0; i < s.length; i++) {
    if (openBrackets.includes(s[i])) {
      stack.push(s[i]);
    } else if (closeBrackets.includes(s[i])) {
      const lastOpen = stack.pop();
      if (openBrackets.indexOf(lastOpen) !== closeBrackets.indexOf(s[i])) {
        console.log(false);
        return false;
      }
    }
  }
  console.log(stack.length === 0);
  return stack.length === 0;
};

isValid("{[]}");
