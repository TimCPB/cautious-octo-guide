describe ("Consecutive", function() {

    it("returns false when numbers do not appear consecutively", function() {
        expect(consecutive([1, 3, 5, 7], 3, 7)).toEqual(false)
    })
})