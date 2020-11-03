describe ("Likes", function() {

    it("explains that no one has liked a post when given an empty array", function() {
        expect(likes([])).toEqual('no one likes this')
    })

    it("explains that one person has liked a post", function() {
        expect(likes(['Peter'])).toEqual('Peter likes this')
    })
    
    it("explains that two people have liked a post", function() {
        expect(likes(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this')
    })

    it("explains that three people have liked a post", function() {
        expect(likes(['Max', 'John', 'Mark'])).toEqual('Max, John and Mark like this')
    })
})