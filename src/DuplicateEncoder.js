function duplicateEncode(word) {
    let array = word.split("")
    let newArray = []
    array.forEach(x => {
        newArray.push("(")
    })
    return newArray.join("")
}