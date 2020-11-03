function consecutive(arr, a, b) {
    let result = false
    arr.forEach((letter, index) => {
        if (letter === a && arr[index + 1] === b) {
            result = true
        } else if (letter === a && arr[index - 1] === b) {
            result = true
        }
    });
    return result
}