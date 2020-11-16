require '../src/list.rb'

describe "List" do

    it "takes a hash containing a single name and returns the name as a string" do
        expect(list([{name: 'Bart'}])).to eq('Bart')
    end

end