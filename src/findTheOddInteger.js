function oddInteger(A){
  let oddInteger = ''
  A.forEach(integer => {
    let count = 0
    A.forEach(element => {
      if(element === integer) count += 1
    })
    if (count % 2 !== 0) oddInteger = integer
  })
  return oddInteger
}