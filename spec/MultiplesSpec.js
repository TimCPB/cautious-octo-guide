describe("Multiples", function() {
    it("returns a single multiple of 3", function(){
        expect(solution(4)).toEqual(3)
    })
    it("returns the sum of 3 and 5", function(){
        expect(solution(6)).toEqual(8)
        expect(solution(10)).toEqual(23)
    })
    it("returns 0 for a negative number", function(){
        expect(solution(-12)).toEqual(0)
    })
})