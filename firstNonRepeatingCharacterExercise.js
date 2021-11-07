//Given a string s consisting of small English letters, 
//find and return the first instance of a non-repeating character in it. 
//If there is no such character, return '_'.

//Example

//For s = "abacabad", the output should be
//firstNotRepeatingCharacter(s) = 'c'.

//There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

//For s = "abacabaabacaba", the output should be
//firstNotRepeatingCharacter(s) = '_'.

//There are no characters in this string that do not repeat.

const word = "sdifhdi;ghlfghafhaskjkl"

function firstNotRepeatingCharacter(s) {
    let checkLetters = s.split("");
    //console.log(checkLetters);
    
    const firstLetter = checkLetters.filter(function(letter) {
        return checkLetters.indexOf(letter) === checkLetters.lastIndexOf(letter)
    });

    if (firstLetter.length === 0) {
        return "_"
    }
    else return firstLetter[0];
}

//console.log(firstNotRepeatingCharacter(word));

const anotherWord = "sdifhdi;ghlfghafhaskjkl"

function notRepeatingCharacter(s) {
    let checkLetters = s.split("");
        
    const firstLetter = checkLetters.filter(letter => checkLetters.indexOf(letter) === checkLetters.lastIndexOf(letter));
    
    if (firstLetter.length === 0) {
        return "_"
    }
    else return firstLetter[0];
}

console.log(notRepeatingCharacter(anotherWord));