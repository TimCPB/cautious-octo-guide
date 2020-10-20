function repeats(array){
    
    var sum = 0
    sortedArray = array.sort()
    sortedArray.forEach((x, i) => {
        if(x !== sortedArray[i + 1] && x !== sortedArray[i -1]){
            sum += x
        }
    })

    return sum
};

// function repeats(array){
//     newArray = []
//     array.forEach(x => {
//         if(!newArray.includes(x)) {
//             newArray.push(x)
//         }
//     })
// };