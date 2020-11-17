def list(names)
    formattedNamesArray = names.map do |hash| 
        if names.index(hash) == (names.length - 1)
            hash[:name]
        elsif names.index(hash) == (names.length - 2)
            "#{hash[:name]} & "
        else
            "#{hash[:name]}, "
        end
    end
    formattedNamesArray.join
end