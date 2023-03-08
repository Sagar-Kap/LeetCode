const isValid = (s) => {
  if (s.length % 2 !== 0) {
    console.log(false);
    return false;
  }

  const final = [];

  const openArr = ["(", "{", "["];
  const closeArr = [")", "}", "]"];
  for (let i = 0; i < s.length; i++) {
    if (openArr.includes(s[i])) {
      final.push(s[i]);
    } else if (closeArr.includes(s[i])) {
      const element = final.pop();
      if (openArr.indexOf(element) !== closeArr.indexOf(s[i])) {
        console.log(false);
        return false;
      }
    }
  }

  console.log(final.length === 0);
  return final.length === 0;
};

isValid("{([[]}])}");
