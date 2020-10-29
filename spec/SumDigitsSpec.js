function sumDigits(num) {
    var array = Array.from(String(Math.abs(num)), Number)
    var sum = 0
    array.forEach(digit => {
            sum += digit
        })
    return sum
}