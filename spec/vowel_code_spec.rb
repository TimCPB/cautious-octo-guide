# require '../src/vowel_code.rb'

# describe "encode" do

#     it "returns a single non-vowel" do
#         expect('b').to eq('b')
#     end

#     it "replaces 'a' with 1" do
#         expect(encode('a')).to eq('1')
#     end

#     it "replaces vowels with their respective numbers" do
#         expect(encode('e')).to eq('2')
#         expect(encode('i')).to eq('3')
#         expect(encode('o')).to eq('4')
#         expect(encode('u')).to eq('5')
#     end

#     it "replaces 'a' with 1 in a string of multiple letters" do
#         expect(encode('ab')).to eq('1b')
#         expect(encode('How are you today?')).to eq('H4w 1r2 y45 t4d1y?')
#     end

# end

# describe "decode" do

#     it "decodes a string" do
#         expect(decode('h2ll4')).to eq('hello')
#     end

# end