describe ("Likes", function() {

    it("explains that no one has liked a post when given an empty array", function() {
        expect(likes([])).toEqual('no one likes this')
    })
})