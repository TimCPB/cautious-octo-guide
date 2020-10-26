function dashatize(num) {
    var initialString = num.toString()
    var initialArray = initialString.split("")
    var newArray = []
    initialArray.forEach(x => {
        if(x % 2 !== 0){
            newArray.push(`-${x}`)
        } else {
            newArray.push(x)
        }
    });
    return newArray.join("")
}