# def iq_test(numbers)
#   odd_numbers_indices = []
#   even_numbers_indices = []
#   numbers.split(" ").each_with_index do |num,index|
#     if num.to_i % 2 != 0
#       odd_numbers_indices.push(index + 1) 
#     elsif num.to_i % 2 == 0
#       even_numbers_indices.push(index + 1)
#     end
#   end
#   odd_numbers_indices.length == 1 ? odd_numbers_indices[0] : even_numbers_indices[0]
# end