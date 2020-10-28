describe("GetCount", function() {
    it("Counts the letter a", function() {
        expect(getCount("a")).toEqual(1)
    })
    it("Counts the letter e", function() {
        expect(getCount("e")).toEqual(1)
    })
})