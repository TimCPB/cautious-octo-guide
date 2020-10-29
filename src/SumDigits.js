describe ("SumDigits", function() {

    it ("returns a single digit", function() {
        expect(sumDigits(4)).toEqual(4)
    })

    it ("returns the sum of two digits", function() {
        expect(sumDigits(10)).toEqual(1)
        expect(sumDigits(99)).toEqual(18)
    })

    it ("converts negative integers to positive", function() {
        expect(sumDigits(-32)).toEqual(5)
    })
})