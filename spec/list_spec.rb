# require '../src/list.rb'

# describe "List" do

#     it "takes a hash containing a single name and returns the name as a string" do
#         expect(list([{name: 'Bart'}])).to eq('Bart')
#     end

#     it "formats a hash containing two names" do
#         expect(list([{name: 'Bart'},{name: 'Lisa'}])).to eq('Bart & Lisa')
#     end

#     it "formats a hash containing three names" do
#         expect(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])).to eq('Bart, Lisa, Maggie, Homer & Marge')
#     end

#     it "formats correctly for an empty array" do
#         expect(list([])).to eq('')
#     end
# end