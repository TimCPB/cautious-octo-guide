function dashatize(num) {
    var initialString = num.toString()
    var initialArray = initialString.split("")
    var initialArrayLength = initialArray.length
    var newArray = []
    initialArray.forEach((x, i) => {
        if(x % 2 !== 0 && i !== initialArrayLength - 1) {
            newArray.push(`-${x}-`)
        } else if(x % 2 !== 0 && i === initialArrayLength - 1) {
            newArray.push(`-${x}`)
        } else {
            newArray.push(x)
        }
    });
    return newArray.join("")
}