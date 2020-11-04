function fix(paragraph){
    let array = paragraph.split("")
    let newArray = array.map((character, i) => {
        if(i === 0)  return character.toUpperCase()
        else return character
    })
    return newArray.join("")
}