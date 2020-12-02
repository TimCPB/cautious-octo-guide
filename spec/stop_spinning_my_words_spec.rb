require '../src/spinning_words.rb'
describe "spinWords" do

  it "returns a word less then 5 characters long in its original order" do
    expect(spinWords("bear")).to eq("bear")
  end


end