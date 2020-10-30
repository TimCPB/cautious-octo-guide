function sumDigits(number) {
    var array = Array.from(String(Math.abs(number)), Number)
    var sum = 0
    array.forEach(digit => {
            sum += digit
        })
    return sum
}