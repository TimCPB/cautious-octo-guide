def iq_test(numbers)
  numbers.split(" ").each_with_index { |num,index| return index +1 if num.to_i % 2 != 0 }
end