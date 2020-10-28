describe("GetCount", function() {
    it("Counts the letter a", function() {
        expect(getCount("a")).toEqual(1)
    })
    it("Counts the letter e", function() {
        expect(getCount("e")).toEqual(1)
    })
    it("Counts the letter i", function() {
        expect(getCount("i")).toEqual(1)
    })
    it("Counts the letter o", function() {
        expect(getCount("o")).toEqual(1)
    })
})