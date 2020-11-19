require '../src/comp.rb'

describe "comp" do

    it "returns true when b contains only the square of a" do
        expect(comp([12], [144])).to eq(true)
        expect(comp([9], [140])).to eq(false)
    end

end
