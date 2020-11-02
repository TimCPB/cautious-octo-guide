describe ("Consecutive", function() {

    it("returns false when given numbers do not appear consecutively", function() {
        expect(consecutive([1, 3, 5, 7], 3, 7)).toEqual(false)
    })

    it("returns true when given numbers appear consecutively", function() {
        expect(consecutive([1, 3, 5, 7], 1, 3)).toEqual(true)
    })
})