require '../src/is_valid_walk'

describe 'is_valid_walk.rb' do
  it "returns true when given a pair of 'N's" do
    expect(is_valid_walk(['n', 'n'])).to eq(true)
  end
end
