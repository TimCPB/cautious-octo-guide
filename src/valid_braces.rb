def valid_braces(braces)
  braces_array = braces.chars
  open_parentheses = 0
  close_parentheses = 0
  
  braces_array.each do |brace|
    if brace == "("
      open_parentheses += 1
    elsif brace == ")"
      close_parentheses +=1
    end
  end
  
  open_parentheses == close_parentheses && braces == braces.chars.sort.join("") ? true : false
end