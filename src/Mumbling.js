function accum(s) {
    const wordArray = s.split("")

    let newWord = wordArray.map((letter, index) => {
        let newElement = []
        for(let i = 0; i < (index + 1); i++) {
            newElement.push(letter.toLowerCase())
        }
        return newElement.join("")
    })

    let newNewWord = newWord.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })

    return newNewWord.join("-")
}