function repeats(array){
    
    newArray = []
    sortedArray = array.sort()
    sortedArray.forEach((x, i) => {
        if(x !== sortedArray[i + 1] && x !== sortedArray[i -1]){
            newArray.push(x)
        }
    })
    
    var sum = 0

    newArray.forEach(x =>
        sum += x
      )

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