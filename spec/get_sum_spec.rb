require '../src/get_sum.rb'

describe "get_sum" do

    it "returns the sum of two consecutive numbers" do
        expect(get_sum(1,2)).to eq(3)
    end

end
