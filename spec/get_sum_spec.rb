require '../src/get_sum.rb'

describe "get_sum" do

    it "returns the sum of two consecutive numbers" do
        expect(get_sum(1,2)).to eq(3)
		end
		
		it "sums all numbers between two non-consecutive numbers" do
			expect(get_sum(1,3)).to eq(6)
		end

		it "works with negative numbers" do
			expect(get_sum(-1,-2)).to eq(-3)
		end

		it "returns a or b when a and b are equal" do
			expect(get_sum(5,5)).to eq(5)
		end

end
