describe("repeats function", function () {
  it("returns sum of two elements", function () {
    expect(repeats([1, 2])).toEqual(3);
  });

  it("returns the sum of three elements", function () {
    expect(repeats([1, 2, 3])).toEqual(6);
  });

  it("returns 15 from [4,5,7,5,4,8]", function () {
    expect(repeats([4, 5, 7, 5, 4, 8])).toEqual(15);
  });

  it("returns 22 from [5, 17, 18, 11, 13, 18, 11, 13]", function () {
    expect(repeats([5, 17, 18, 11, 13, 18, 11, 13])).toEqual(22);
  });
});
