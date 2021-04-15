function twoSum(numbers, target) {
  let indicesArray = [];
  numbers.forEach((num, i) => {
    if (indicesArray.length < 2) {
      numbers.splice(i, 1, null);
      numbers.forEach((newNum, newI) => {
        if (num + newNum === target) {
          indicesArray.push(i, newI);
        }
      });
    }
  });
  return indicesArray;
}
