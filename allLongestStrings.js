//Given an array of strings, return another array containing all of its longest strings.
const inputArray = ["abc", 
"eeee", 
"abcd", 
"dcd"]

function allLongestStrings(array) {
  let wordLengths = []
    getLengths = () => {
      for (i = 0; i < array.length; i++){
        let word = array[i]
        let wordLength = word.length
        wordLengths.push(wordLength)
      }
      //console.log(wordLengths)
      let longestWord = Math.max(...wordLengths)
      //console.log (longestWord)
      return longestWord  
    }

    let lengthCheck = getLengths()
    let longestWords = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].length === lengthCheck) {
            longestWords.push(array[i])
        }
    }
    return longestWords)
}

//Best answer 

allLongestStrings(inputArray)

function allLongestStrings(inputArray) {
    'use strict';
    let maxSize = Math.max(...inputArray.map(x => x.length));
    return inputArray.filter(x => x.length === maxSize);
}


