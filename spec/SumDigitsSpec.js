function sumDigits(num) {
    var array = Array.from(String(num), Number)
    console.log(array)
    var sum = 0
    array.forEach(digit => {
        if (!isNaN(digit)) {
            sum += digit
        }
    })
    return sum
}