function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"]
    var arrayFromString = str.split("")

    arrayFromString.forEach(letter => {
        if(vowels.includes(letter)){
            vowelsCount++
        }
    })

    
    
    return vowelsCount;
  }

      // if(str === "a") {
    //     vowelsCount++
    // } else if(str === "e") {
    //     vowelsCount++
    // } else if(str === "i") {
    //     vowelsCount++
    // } else if(str === "o") {
    //     vowelsCount++
    // } else if(str === "u") {
    //     vowelsCount++
    // }