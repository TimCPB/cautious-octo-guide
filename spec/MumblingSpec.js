describe("accum", function() {

  it ("returns 'A' when given 'A'", function() {
    expect(accum("A")).toEqual("A")
  });
  it ("returns 'B' when given 'B'", function() {
    expect(accum("B")).toEqual("B")
  })
})