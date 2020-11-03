function oddInteger(array){
  let oddInteger = ''
  array.forEach(integer => {
    let value = integer
    let count = 0
    array.forEach(number => {
      if(number === value){
        count += 1
        console.log(`count for ${number} - ${count}`)
      }
    })
    if (count === 1) {
      oddInteger = integer
    }
  })
  return oddInteger
}