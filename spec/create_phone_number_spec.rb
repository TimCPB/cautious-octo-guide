require '../src/create_phone_number'

describe 'create_phone_number_spec.rb' do
  it "turns the array into a string" do
    expect(create_phone_number([1,2,3])).to eq("123")
  end
end