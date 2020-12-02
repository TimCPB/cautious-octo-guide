def spinWords(string)

  split_string = string.split(" ")

  new_array = split_string.map do  |word|
    word.length < 5 ? word : word.reverse
  end
    new_array.join(" ")
 
end