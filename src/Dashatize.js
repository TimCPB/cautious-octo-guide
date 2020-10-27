function dashatize(num) {
    if(isNaN(num)) {
        return num.toString()
    }
    var initialString = Math.abs(num).toString()
    var initialArray = initialString.split("")
    var lastIndex = initialArray.length - 1
    var newArray = []
    initialArray.forEach((x, i) => {
        if(_isOddElement(x, i, lastIndex)) {
            newArray.push(`-${x}-`)
        } else if(_lastElementIsOdd(x, i, lastIndex)) {
            newArray.push(`-${x}`)
        } else if(_firstElementIsOdd(x, i, lastIndex)) {
            newArray.push(`${x}-`)
        } else {
            newArray.push(x)
        }
    });
    return _removeExcessDashes(newArray.join(""))
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

function _isOddElement(element, index, lastArrayIndex){
    if (element % 2 !== 0 && index !== lastArrayIndex && index !== 0) {
        return true
    } 
}

function _lastElementIsOdd(element, index, lastArrayIndex){
    if (element % 2 !== 0 && index === lastArrayIndex && index !== 0) {
        return true
    } 
}

function _firstElementIsOdd(element, index, lastArrayIndex){
    if (element % 2 !== 0 && index !== lastArrayIndex && index === 0) {
        return true
    } 
}