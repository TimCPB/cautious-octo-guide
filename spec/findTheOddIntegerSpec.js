describe ("oddInteger", function(){
  it ("returns an the same integer when given one", function(){
    expect(oddInteger([10])).toEqual(10)
  })

  it ("returns the odd integer when given 3 integers", function(){
    expect(oddInteger([1,2,2])).toEqual(1)
  })
})