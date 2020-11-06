describe ("tripleX", function(){

    it("returns true for a single string of xxx", function() {
        expect(tripleX("xxx")).toEqual(true)
    })

    it("only returns true if xxx is the first instance of x in a string", function() {
        expect(tripleX("softx kitty, warm kitty, xxxxx")).toEqual(false)
    })
})