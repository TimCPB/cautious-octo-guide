def score( dice )
    one_count = 0
    two_count = 0
    three_count = 0
    four_count = 0
    five_count = 0
    six_count = 0
    score = 0

    dice.each do |x|
        if x == 1
            one_count += 1
        elsif x == 2
            two_count += 1
        elsif x == 3
            three_count += 1
        elsif x == 4
            four_count += 1
        elsif x == 5
            five_count += 1
        elsif x == 6
            six_count += 1
        end
    end

    if one_count == 1
        score += 100
    elsif five_count == 1
        score += 50
    elsif one_count == 3
        score += 1000
    elsif two_count == 3
        score += 200
    elsif three_count == 3
        score += 300
    elsif four_count == 3
        score += 400
    elsif five_count == 3
        score += 500
    elsif six_count == 3
        score += 600
    end

    return score
    
end