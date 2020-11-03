describe ("oddInteger", function(){
  it ("returns an the same integer when given one", function(){
    expect(oddInteger([10])).toEqual(10)
  })

  it ("returns the odd integer when given 3 integers", function(){
    expect(oddInteger([1,2,2])).toEqual(1)
  })

  it ("returns the odd integer from a long array of integers", function(){
    expect(oddInteger([1,1,1,1,1,1,10,10,10,1,1])).toEqual(10)
    expect(oddInteger([1,1,2,-2,5,2,4,4,-1,-2,5])).toEqual(-1)
  })
})