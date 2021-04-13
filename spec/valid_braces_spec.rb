require '../src/valid_braces'

describe 'valid_braces' do
  it 'returns true for a pair of parenthesis' do
    expect(valid_braces('()')).to eq(true)
  end

  it 'returns false for a pair of mismatched parenthesis' do
    expect(valid_braces('((')).to eq(false)
  end

  it 'returns true for matching pairs of parentheses' do
    expect(valid_braces('(())')).to eq(true)
  end

  it 'returns false for un-matching pairs of parentheses' do
    expect(valid_braces('))((')).to eq(false)
  end

  it 'returns false for non-nested pairs of parentheses' do
    expect(valid_braces('(')).to eq(false)
  end

  it 'returns true for pairs of different braces' do
    expect(valid_braces('(){}')).to eq(true)
  end

  it 'returns false for non-nested pairs of different braces' do
    expect(valid_braces('({)}')).to eq(false)
  end

  # it 'returns true for nested pairs of different braces' do
  #   expect(valid_braces("({})")).to eq(true)
  # end
end
