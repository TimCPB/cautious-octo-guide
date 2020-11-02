function consecutive(array, a, b) {
    let result = false
    array.forEach((letter, index) => {
        if (letter === a && array[index + 1] === b) {
            result = true
        }
    });
    return result
}