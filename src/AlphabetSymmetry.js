const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function solve(arr){
    let word = arr[0]
    let count = 0
    word.split("").forEach((letter, index) => {
        if (letter === alphabet[index]) count++
        console.log(letter, index, alphabet[index])
    });
    return count
}