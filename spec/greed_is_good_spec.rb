require '../src/greed_is_good.rb'

describe "Score" do

    it "returns 100 for a single roll of 1" do
        expect(score([1])).to eq(100)
    end

    it "returns 50 for a single roll of 5" do
        expect(score([5])).to eq(50)
    end

end