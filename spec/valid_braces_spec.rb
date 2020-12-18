require '../src/valid_braces.rb'

describe 'valid_braces' do
  
  it 'returns true for a pair of parenthesis' do
    expect(valid_braces("()")).to eq(true)
  end
end