function duplicateEncode(word) {
    let lowerCaseWord = word.toLowerCase()
    let array = lowerCaseWord.split("")
    let encodedArray = []
    array.forEach(x => {
        if (lowerCaseWord.indexOf(x) === lowerCaseWord.lastIndexOf(x)) {
            encodedArray.push("(")
        } else {
            encodedArray.push(")")
        }
    })
    return encodedArray.join("")
}