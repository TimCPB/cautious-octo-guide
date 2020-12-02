require '../src/spinning_words.rb'
describe "spinWords" do

  it "returns a word less then 5 characters long in its original order" do
    expect(spinWords("bear")).to eq("bear")
  end

  it "returns multiple words less than 5 characters long in its original form" do
      expect(spinWords("hey bear")).to eq("hey bear")
  end

  it "returns a word reversed that is five or more characters long" do
    expect(spinWords("hello")).to eq("olleh")
  end

  it "returns a words reversed that is five or more characters long" do
    expect(spinWords("hello hello")).to eq("olleh olleh")
  end

  it "returns a mix of 5 and less character letters" do
    expect(spinWords("Hey fellow warriors")).to eq("Hey wollef sroirraw")
  end

end