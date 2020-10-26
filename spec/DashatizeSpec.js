describe("Dashatize", function() {
    it("inserts a dash into a 2 digit number containting one integer", function(){
        expect(dashatize(27)).toEqual("2-7")
    })
})