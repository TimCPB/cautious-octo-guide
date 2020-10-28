function accum(s) {
  const wordArray = s.split("")
  let newWord = []

  if(s.length > 1){
    wordArray.forEach((letter, index) => {
      newWord.push(letter)
    })
    return newWord
  } else {
    return s
  }
}