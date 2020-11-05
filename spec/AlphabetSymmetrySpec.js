describe("Solve", function() {

    it("solves for a single, lowercase word", function() {
        expect(solve(["abc"])).toEqual([3]);
        expect(solve(["abode"])).toEqual([4])
    })

    it("solves for a single word containing upper and lower case letters", function() {
        expect(solve(["aBc"])).toEqual([3]);
        expect(solve(["aBODe"])).toEqual([4])
    })

    it("takes an array of words and returns an array of solutions", function() {
        expect(solve(["abide","ABc","xyz"])).toEqual([4,3,0]);
        expect(solve(["encode","abc","xyzD","ABmD"])).toEqual([1, 3, 1, 3])
    })
})