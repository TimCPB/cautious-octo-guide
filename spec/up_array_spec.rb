require '../src/up_array.rb'

describe "up_array" do

    it "adds one to an array with one element" do
        expect(up_array([4])).to eq([5])
    end

    it "returns an array that correesponds to the sum of original array + 1" do
        expect(up_array([4,3,2,5])).to eq([4,3,2,6])
    end


    it "returns nil if the array contains a non-integer" do
        expect(up_array([4,3,2,-5])).to eq(nil)
    end

    it "adds one to the sum of the array" do
        expect(up_array([4,3,2,9])).to eq([4,3,3,0])
    end

end
