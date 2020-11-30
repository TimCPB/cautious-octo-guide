require '../src/iq_test.rb'

describe "IQ Test" do
  
  it "Returns the index of a single, odd number" do
    expect(iq_test("3 ")).to eq(1)
  end

end

