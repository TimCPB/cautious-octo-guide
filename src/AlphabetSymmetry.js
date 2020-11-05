function solve(arr){
    return arr.map( word => _howManyOrderedLetters(word) )
}

function _howManyOrderedLetters(string){
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let count = 0
    string.toLowerCase().split("").forEach((letter, index) => {
        if (letter === alphabet[index]) count++
    });
    return count
}