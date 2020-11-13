def up_array(arr)
    arr.each do |x|
        if !x.is_a?(Integer) || x < 0
            return nil
        end
    end
    arr[(arr.length) - 1] = (arr.last) + 1
    arr
end