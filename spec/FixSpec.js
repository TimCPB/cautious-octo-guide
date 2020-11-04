describe ("Fix", function(){

    it("returns the given string", function(){
        expect(fix("")).toEqual("");
    })

    it("capitalizes the first letter of a paragraph", function(){
        expect(fix("hi.")).toEqual("Hi.");
    })

})