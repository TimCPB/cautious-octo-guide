function squareDigits(num) {
  const sqArray = String(num)
    .split("")
    .map((e) => {
      return e * e;
    });
  return Number(sqArray.join(""));
}
