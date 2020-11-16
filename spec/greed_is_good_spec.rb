# require '../src/greed_is_good.rb'

# describe "Score" do

#     it "returns 100 for a single roll of 1" do
#         expect(score([1])).to eq(100)
#     end

#     it "returns 50 for a single roll of 5" do
#         expect(score([5])).to eq(50)
#     end

#     it "returns the correct score for the different triples" do
#         expect(score([1, 1, 1, 3, 4])).to eq(1000)
#         expect(score([6, 6, 6, 3, 4])).to eq(600)
#         expect(score([5, 5, 5, 3, 4])).to eq(500)
#         expect(score([4, 4, 4, 2, 6])).to eq(400)
#         expect(score([3, 3, 3, 2, 6])).to eq(300)
#         expect(score([2, 2, 2, 3, 4])).to eq(200)
#         expect(score([2, 2, 2, 1, 4])).to eq(300)
#     end

#     it "returns the correct score for four or five 2s, 3s, 4s or 6s" do
#         expect(score([4, 4, 4, 3, 4])).to eq(400)
#     end

#     it "returns the correct score for four or five 1s or 5s" do
#         expect(score([1, 1, 1, 3, 1])).to eq(1100)
#         expect(score([5, 5, 5, 3, 5])).to eq(550)
#         expect(score([1, 1, 1, 1, 1])).to eq(1200)
#         expect(score([5, 5, 5, 5, 5])).to eq(600)
#     end

# end