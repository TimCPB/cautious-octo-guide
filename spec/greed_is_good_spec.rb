require '../src/greed_is_good.rb'

describe "Score" do

    it "returns 100 for a single roll of 1" do
        expect(score([1])).to eq(100)
    end

    it "returns 50 for a single roll of 5" do
        expect(score([5])).to eq(50)
    end

    it "returns the correct score for the different triples" do
        expect(score([1, 1, 1, 3, 4])).to eq(1000)
        expect(score([6, 6, 6, 3, 4])).to eq(600)
        expect(score([5, 5, 5, 3, 4])).to eq(500)
        expect(score([4, 4, 4, 2, 6])).to eq(400)
        expect(score([3, 3, 3, 2, 6])).to eq(300)
        expect(score([2, 2, 2, 3, 4])).to eq(200)
    end

end