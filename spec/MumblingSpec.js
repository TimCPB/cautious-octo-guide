describe("accum", function() {

  it ("returns 'A' when given 'A'", function() {
    expect(accum("A")).toEqual("A")
  });
  it ("returns 'B' when given 'B'", function() {
    expect(accum("B")).toEqual("B")
  })
  it ("returns 'A-Aa' when given 'AA'", function(){
    expect(accum("AA")).toEqual("A-Aa")
  })
  it ("returns 'B-Bb' when given 'BB'", function(){
    expect(accum("BB")).toEqual("B-Bb")
  })
})