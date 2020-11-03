function oddInteger(array){
  
  array.forEach(integer => {
    let value = integer
    let count = 0
    array.forEach(number => {
      if(number === value){
        count += 1
      }
    })
  })
  return count
}