function fix(paragraph){
    let array = paragraph.split("")
    let newArray = array.map((character, i) => {
        if(i === 0 || array[i - 2] === ".")  return character.toUpperCase()
        else return character
    })
    return newArray.join("")
}