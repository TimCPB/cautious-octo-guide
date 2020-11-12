require '../src/vowel_code.rb'

describe "encode" do

    it "returns a single non-vowel" do
        expect('b').to eq('b')
    end

    it "replaces 'a' with 1" do
        expect(encode('a')).to eq('1')
    end

end