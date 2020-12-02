require '../src/spinning_words.rb'
describe "spinWords" do

  it "returns words less then 5 characters long in its original order" do
    expect(spinWords("bear")).to eq("bear")
    expect(spinWords("hey bear")).to eq("hey bear")
  end


end