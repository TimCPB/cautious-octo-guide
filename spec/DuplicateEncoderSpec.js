describe("duplicateEncoder", function(){
    it("replaces single instances of letters with '('", function() {
        expect(duplicateEncode("din")).toEqual("(((")
    })
})