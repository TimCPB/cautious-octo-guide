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

    while (one_count + two_count + three_count + four_count + five_count + six_count) > 0 do
        if one_count == 1
            score += 100
            one_count -= 1
        elsif five_count == 1
            score += 50
            five_count -= 1
        elsif one_count == 3
            score += 1000
            one_count -= 3
        elsif two_count >= 3
            score += 200
            two_count -= two_count
        elsif three_count >= 3
            score += 300
            three_count -= three_count
        elsif four_count >= 3
            score += 400
            four_count -= four_count
        elsif five_count == 3
            score += 500
            five_count -= 3
        elsif six_count >= 3
            score += 600
            six_count -= six_count
        elsif one_count == 4
            score += 1100
            one_count -= 4
        elsif five_count == 4
            score += 550
            five_count -= 4
        elsif one_count == 5
            score += 1200
            one_count -= 5
        elsif five_count == 5
            score += 600
            five_count -= 5
        elsif two_count < 3 && two_count > 0
            two_count -= two_count
        elsif three_count < 3  && three_count > 0
            three_count -= three_count
        elsif four_count < 3  && four_count > 0
            four_count -= four_count
        elsif six_count < 3 && six_count > 0
            six_count -= six_count
        end
    end

    return score

end

# 
