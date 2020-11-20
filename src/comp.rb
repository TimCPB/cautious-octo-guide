def comp(array1, array2)
    result = true
    array1.each.with_index do |num, index|
        if num != Math.sqrt(array2[index])
            result = false
        end
    end
    result
end