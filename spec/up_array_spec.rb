require '../src/up_array.rb'

describe "up_array" do

    it "adds one to an array with one element" do
        expect(up_array([4])).to eq([5])
    end

end
