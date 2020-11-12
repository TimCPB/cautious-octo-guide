def encode(s)

    array = s.split('')

    encoded_array = array.map { |character| 

        if character == 'a'
            "1"
        elsif character == 'e'
            '2'
        elsif character == 'i'
            '3'
        elsif character == 'o'
            '4'
        elsif character == 'u'
            '5'
        else
            character
        end
    }

    encoded_array.join('')

end

def decode(s)

    array = s.split('')

    decoded_array = array.map { |character| 

        if character == '1'
            "a"
        elsif character == '2'
            'e'
        elsif character == '3'
            'i'
        elsif character == '4'
            'o'
        elsif character == '5'
            'u'
        else
            character
        end
    }

    decoded_array.join('')

end
