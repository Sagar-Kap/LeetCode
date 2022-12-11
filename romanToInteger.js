const romanToInt = (s) => {
  const data = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const numArray = s.split("");
  let integer = 0;

  for (let i in numArray) {
    const currentValue = data[numArray[i]];
    let rightInteger;
    data[numArray[Number(i) + 1]]
      ? (rightInteger = data[numArray[Number(i) + 1]])
      : (rightInteger = 0);

    currentValue < rightInteger
      ? (integer -= currentValue)
      : (integer += currentValue);
  }

  return integer;
};

romanToInt("XIV");
