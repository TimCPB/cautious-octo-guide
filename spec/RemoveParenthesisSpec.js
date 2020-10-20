describe("removeParentheses", function(){
    it("returns a string without parenthesis", function() {
        expect(removeParentheses("Hello()")).toEqual("Hello")
    })
    it("also removes the content of the parenthesis", function() {
        expect(removeParentheses("Hello(world)")).toEqual("Hello")
    })
})