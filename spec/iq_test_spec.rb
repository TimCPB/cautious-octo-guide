require '../src/iq_test.rb'

describe "IQ Test" do
  
  it "Returns the index of a single, odd number" do
    expect(iq_test("3 ")).to eq(1)
  end

  it "Returns the index of the odd number from an array" do
    expect(iq_test("2 4 7 8 10")).to eq(3)
  end

end

