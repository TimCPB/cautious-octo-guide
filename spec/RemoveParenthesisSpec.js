describe("removeParentheses", function(){
    it("returns a string without parentheses", function() {
        expect(removeParentheses("Hello()")).toEqual("Hello")
    })
    it("removes the content of the parentheses", function() {
        expect(removeParentheses("Hello(world)")).toEqual("Hello")
    })
    it("removes the content the parentheses but leaves content ", function() {
        expect(removeParentheses("a (bc d)e")).toEqual("a e")
    })
})