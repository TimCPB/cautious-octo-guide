def encode(s)

    array = s.split('')

    encoded_array = array.map { |letter| 

        if letter == 'a'
            "1"
        elsif letter == 'e'
            '2'
        elsif letter == 'i'
            '3'
        elsif letter == 'o'
            '4'
        elsif letter == 'u'
            '5'
        else
            letter
        end
    }

    encoded_array.join('')

end
