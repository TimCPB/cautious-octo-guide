describe("duplicateEncoder", function(){
    it("replaces single instances of letters with '('", function() {
        expect(duplicateEncode("din")).toEqual("(((")
    })
    it("replaces recurring letters with ')'", function() {
        expect(duplicateEncode("recede")).toEqual("()()()")
    })
    it("ignores case", function() {
        expect(duplicateEncode("Success")).toEqual(")())())")
    })
    it("encodes non-letter characters", function() {
        expect(duplicateEncode("(( @")).toEqual("))((")
    })
})