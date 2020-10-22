function duplicateEncode(word) {
    let array = word.toLowerCase().split("")
    let encodedArray = []
    array.forEach(x => {
        if (word.indexOf(x) === word.lastIndexOf(x)) {
            encodedArray.push("(")
        } else {
            encodedArray.push(")")
        }
    })
    return encodedArray.join("")
}