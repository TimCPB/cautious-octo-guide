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
    var c = s.indexOf("(", a + 1)
    var d = s.indexOf(")")
    if (c > d) {
        var newString = s
        while (newString.indexOf("(") !== -1) {
            var f = newString.indexOf("(")
            var g = newString.indexOf(")")
            var content = newString.substring(f, g + 1)
            newString = newString.replace(content, "")
        }
        return newString
    } 
    else {
        var parenthesesContent = s.substring(a, b + 1)
        console.log(parenthesesContent)
        console.log(a, b)
        var result = s.replace(parenthesesContent, "")
        return result
    }
    
}