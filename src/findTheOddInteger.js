function oddInteger(A){
  let oddInteger = ''
  A.forEach(integer => {
    let count = 0
    A.forEach(number => {
      if(number === integer) count += 1
    })
    if (count % 2 !== 0) oddInteger = integer
  })
  return oddInteger
}