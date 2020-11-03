describe ("Consecutive", function() {

    it("returns false when given numbers do not appear consecutively", function() {
        expect(consecutive([1, 3, 5, 7], 3, 7)).toEqual(false)
    })

    it("returns true when given numbers appear consecutively in ascending order", function() {
        expect(consecutive([1, 3, 5, 7], 1, 3)).toEqual(true)
        expect(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4)).toEqual(true)
    })

    it("returns true when given numbers appear consecutively, in descending order", function() {
        expect(consecutive([1, 3, 5, 7], 3, 1)).toEqual(true)
    })
})