def encode(s)

    vowels = ['a', 'e', 'i', 'o', 'u']
    numbers = ['1', '2', '3', '4', '5']

    array = s.split('')

    encoded_array = array.map { |character| 

        if vowels.include?(character)
            index = vowels.index(character)
            numbers[index]
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
