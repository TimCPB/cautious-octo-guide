def solve(st)
    count = 0
    right_parenthesis = 0
    left_parenthesis = 0
    if st.length % 2 != 0
        return -1
    else
        st.split("").each do |x|
            if x == "("
                left_parenthesis += 1
            elsif x == ")"
                right_parenthesis += 1
            end
        end
    end
    (left_parenthesis - right_parenthesis).abs
end
