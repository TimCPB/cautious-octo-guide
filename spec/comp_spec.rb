require '../src/comp.rb'

describe "comp" do

    it "returns true when b contains only the square of a" do
        expect(comp([12], [144])).to eq(true)
        expect(comp([9], [140])).to eq(false)
    end

    it "compares all elements in b to the elements of the same index in a" do
        expect(comp([12, 10], [144, 100])).to eq(true)
        expect(comp([10, 9], [100, 140])).to eq(false)
    end

    it "compares all elements in b and a regardless of order" do
        expect(comp([12, 5, 10], [144, 100, 25])).to eq(true)
    end

    it "compares all elements in b and a regardless of order, with duplicate elements" do
        expect(comp([12, 5, 10, 5], [144, 100, 25, 25])).to eq(true)
    end

end
