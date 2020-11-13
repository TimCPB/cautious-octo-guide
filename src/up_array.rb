def up_array(arr)
    arr.each { |x| return nil if !x.is_a?(Integer) || x < 0 }
    arr[(arr.length) - 1] = (arr.last) + 1
    arr
end