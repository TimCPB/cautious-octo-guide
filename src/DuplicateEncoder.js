function duplicateEncode(word) {
    let encodedArray = []
    word.toLowerCase().split("").forEach(x => {
        if (word.indexOf(x) === word.lastIndexOf(x)) {
            encodedArray.push("(")
        } else {
            encodedArray.push(")")
        }
    })
    return encodedArray.join("")
}