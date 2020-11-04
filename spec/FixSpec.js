describe ("Fix", function(){

    it("returns the given string", function(){
        expect(fix("")).toEqual("");
    })

    it("capitalizes the first letter of a paragraph", function(){
        expect(fix("hi.")).toEqual("Hi.");
    })

    it("capitalizes the first letter of every sentence", function(){
        const unFixedParagraph = "hello. my name is inigo montoya. you killed my father. prepare to die."
        const fixedParagraph = "Hello. My name is inigo montoya. You killed my father. Prepare to die."
        expect(fix(unFixedParagraph)).toEqual(fixedParagraph);
    })

})