function dashatize(num) {
    if(isNaN(num)) {
        return num.toString()
    }
    var initialString = Math.abs(num).toString()
    var initialArray = initialString.split("")
    var lastIndex = initialArray.length - 1
    var newArray = []
    initialArray.forEach((x, i) => {
        if(x % 2 !== 0 && i !== lastIndex && i !== 0) {
            newArray.push(`-${x}-`)
        } else if(x % 2 !== 0 && i === lastIndex && i !== 0) {
            newArray.push(`-${x}`)
        } else if(x % 2 !== 0 && i === 0 && i !== lastIndex) {
            newArray.push(`${x}-`)
        } else {
            newArray.push(x)
        }
    });
    console.log(newArray)
    var finalString = _removeExcessDashes(newArray.join(""))
    return finalString
}

function _removeExcessDashes(string) {
    var array = string.split("")
    array.map((x, i) => {
        if (x === "-" && array[i - 1] === "-") {
            array.splice(i, 1)
        }
    })
    return array.join("")
}