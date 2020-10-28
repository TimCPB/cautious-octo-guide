function accum(s) {
  const wordArray = s.split("")
  let newWord = []
  console.log(wordArray)

    wordArray.forEach((letter, index) => {
        console.log(letter, index)
      // input 
      //push letter x (index + 1)
      // var newElement = 
      let newElement = []
      for(let i = 0; i < (index + 1); i++) {
          newElement.push(letter.toLowerCase())
      }
      newWord.push(newElement.join(""))
    })
    console.log(newWord)
  return newWord.join("-")
}