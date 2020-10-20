function removeParentheses(s){
    // array = s.split("")
    // newArray = []
    // array.forEach(x => {
    //     if(x !== "(" && x !== ")") {
    //         newArray.push(x)
    //     }
    // });
    // return newArray.join('')
    var a = s.indexOf("(")
    var b = s.indexOf(")")
    var parenthesesContent = s.substr(a, b)
    var result = s.replace(parenthesesContent, "")
    return result
    
}