describe("Dashatize", function() {
    it("inserts a dash into a 2 digit number containting one integer", function(){
        expect(dashatize(27)).toEqual("2-7")
    })
    it("inserts a dash before and after an odd integer", function(){
        expect(dashatize(274)).toEqual("2-7-4")
        expect(dashatize(86320)).toEqual("86-3-20")
    })
    it("does not insert a dash before the first digit", function(){
        expect(dashatize(544)).toEqual("5-44")
    })
    it("treats negative numbers as if they were positive", function(){
        expect(dashatize(-1)).toEqual("1")
    })
})