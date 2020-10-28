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
    it("Counts the letter u", function() {
        expect(getCount("u")).toEqual(1)
    })
    it("only contains a consonant", function(){
        expect(getCount("b")).toEqual(0)
    })
    it("counts a vowel from a string of multiple letters", function(){
        expect(getCount("ab")).toEqual(1)
        expect(getCount("aa")).toEqual(2)
        expect(getCount("abracadabra")).toEqual(5)
    })
})