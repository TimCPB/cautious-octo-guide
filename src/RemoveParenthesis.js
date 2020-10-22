function removeParentheses(s){
    var a = s.indexOf("(")
    var b = s.lastIndexOf(")")
    var c = s.indexOf("(", a + 1)
    var d = s.indexOf(")")
    if (c > d) {
        while (s.indexOf("(") !== -1) {
            var f = s.indexOf("(")
            var g = s.indexOf(")")
            var content = s.substring(f, g + 1)
            s = s.replace(content, "")
        }
        return s
    } 
    else {
        var parenthesesContent = s.substring(a, b + 1)
        return s.replace(parenthesesContent, "")
    }
    
}