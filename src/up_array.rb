def up_array(arr)
    return nil if arr.length == 0
    arr.each { |x| return nil if !x.is_a?(Integer) || x < 0 || x > 9 }
    total = (arr.join('').to_i) + 1
    total.to_s.split('').map { |s| s.to_i }
end