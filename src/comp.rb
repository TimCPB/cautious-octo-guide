def comp(array1, array2)
    return false if !array1 || !array2
    result = true
    array2.each do |num|
        num_to_compare = Math.sqrt(num)
        if array1.include?(num_to_compare)
            array1.slice!(array1.index(num_to_compare))
        else
            result = false
        end
    end
    result
end