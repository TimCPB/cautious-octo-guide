function accum(s) {
  const wordArray = s.split("")
  let newWord = []
  let newNewWord = []

    wordArray.forEach((letter, index) => {
        console.log(letter, index)
      let newElement = []
      for(let i = 0; i < (index + 1); i++) {
          newElement.push(letter.toLowerCase())
      }
      newWord.push(newElement.join(""))
    })

    newWord.forEach(word => {
      let wordCapitalized = word.charAt(0).toUpperCase() + word.slice(1)
     newNewWord.push(wordCapitalized)
    })

  return newNewWord.join("-")
}