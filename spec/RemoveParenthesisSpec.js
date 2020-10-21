describe("removeParentheses", function(){
    it("returns a string without parentheses", function() {
        expect(removeParentheses("Hello()")).toEqual("Hello")
    })
    it("removes the content of the parentheses", function() {
        expect(removeParentheses("Hello(world)")).toEqual("Hello")
    })
    it("removes the content the parentheses but leaves content before and after", function() {
        expect(removeParentheses("a (bc d)e")).toEqual("a e")
    })
    it("removes the content from multiple nested parentheses", function() {
        expect(removeParentheses("a(b(c) e )")).toEqual("a")
    })
    it("removes the content from multiple separate parentheses", function() {
        expect(removeParentheses("(first group) (second group) (third group)")).toEqual("  ")
    })
})