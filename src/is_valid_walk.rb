def is_valid_walk(walk)
  return false if walk.length != 10
  n_count = 0
  s_count = 0
  e_count = 0
  w_count = 0
  walk.each do |direction| 
  if direction == 'n'
    n_count += 1
  elsif direction == 's'
    s_count += 1
  elsif direction == 'e'
    e_count += 1
  elsif direction == 'w'
    w_count += 1
  end
end
n_count == s_count && e_count == w_count ? true : false
end
