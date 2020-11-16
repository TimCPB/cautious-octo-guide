def list(names)
    if names.length == 1 
        names[0][:name]
    elsif names.length == 2
        "#{names[0][:name]} & #{names[1][:name]}"
    end
end