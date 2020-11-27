require "../src/modified_sums.rb"

describe "modified sums" do

  it "multiplies each element by 'n', adds them together and deletes the sum of the original array" do
    expect(modified_sum([1, 2, 3], 3)).to eq(30)
  end

  it "another version" do
    expect(modified_sum([1, 2], 5)).to eq(30)
  end

end
