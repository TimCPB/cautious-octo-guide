function duplicateEncode(word) {
    let array = word.toLowerCase().split("")
    let newArray = []
    array.forEach(x => {
        if (word.indexOf(x) === word.lastIndexOf(x)) {
            newArray.push("(")
        } else {
            newArray.push(")")
        }
    })
    return newArray.join("")
}