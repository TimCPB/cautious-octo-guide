def iq_test(numbers)
  array = numbers.split(" ")
  array.each_with_index do |num,index|
    if num.to_i % 2 != 0
      return index +1
    end
  end
end