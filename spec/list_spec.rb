require '../src/list.rb'

describe "List" do

    it "takes a hash containing a single name and returns the name as a string" do
        expect(list([{name: 'Bart'}])).to eq('Bart')
    end

    it "formats a hash containing two names" do
        expect(list([{name: 'Bart'},{name: 'Lisa'}])).to eq('Bart & Lisa')
    end

end