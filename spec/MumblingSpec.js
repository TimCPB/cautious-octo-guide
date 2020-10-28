describe("accum", function() {

  it ("returns 'A' when given 'A'", function() {
    expect(accum("A")).toEqual("A")
  });
  it ("returns 'A' when given 'a'", function() {
    expect(accum("a")).toEqual("A")
  })
  it ("returns 'B' when given 'B'", function() {
    expect(accum("B")).toEqual("B")
  })
  it ("returns 'A-Aa' when given 'AA'", function(){
    expect(accum("AA")).toEqual("A-Aa")
  })
  it ("returns 'A-Bb' when given 'AB'", function(){
    expect(accum("AB")).toEqual("A-Bb")
  })
  it ("returns 'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc' when given 'HbideVbxncC'", function(){
    expect(accum("HbideVbxncC")).toEqual("H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc")
  })



})