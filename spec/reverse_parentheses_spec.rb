require '../src/reverse_parentheses.rb'

describe "list" do

    it "solves the basic tests" do
        expect(solve(")()(")).to eq(2)
        expect(solve("((()")).to eq(1)
        expect(solve("(((")).to eq(-1)
        expect(solve("((()")).to eq(1)
        expect(solve("())()))))()()(")).to eq(4)
    end

end

        
