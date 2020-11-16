def list(names)
    if names.length == 1 
        names[0][:name]
    elsif names.length == 2
        "#{names[0][:name]} & #{names[1][:name]}"
    elsif names.length > 2
        newNamesArray = names.map do |hash| 
            if names.index(hash) == (names.length - 1)
                hash[:name]
            elsif names.index(hash) == (names.length - 2)
                "#{hash[:name]} & "
            else
                "#{hash[:name]}, "
            end
        end
    newNamesArray.join 
    end

    
end