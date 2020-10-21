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
    var b = s.lastIndexOf(")")
    var parenthesesContent = s.substr(a, b - 1)
    console.log(parenthesesContent)
    console.log(a, b)
    var result = s.replace(parenthesesContent, "")
    return result
    
}