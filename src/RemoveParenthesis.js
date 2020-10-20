function removeParentheses(s){
    array = s.split("")
    newArray = []
    array.forEach(x => {
        if(x !== "(" && x !== ")") {
            newArray.push(x)
        }
    });
    return newArray.join('')
}