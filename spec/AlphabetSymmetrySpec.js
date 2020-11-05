describe("Solve", function() {

    it("solves for a single, lowercase word", function() {
        expect(solve(["abc"])).toEqual(3);
        expect(solve(["abode"])).toEqual(4)
    })

    it("solves for a single word containing upper and lower case letters", function() {
        expect(solve(["aBc"])).toEqual(3);
        expect(solve(["aBODe"])).toEqual(4)
    })
})