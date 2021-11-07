//Given the string, check if it is a palindrome.

//Example

//For inputString = "aabaa", the output should be
//checkPalindrome(inputString) = true;
//For inputString = "abac", the output should be
//checkPalindrome(inputString) = false;
//For inputString = "a", the output should be
//checkPalindrome(inputString) = true.

const testString = "aabecks"
const anotherTestString = "risetovotesir"

function checkPalindrome(inputString) {
    const arr = inputString.split("").reverse()
    console.log(arr)
    const testString = arr.join("")
    const checkString = (inputString === testString)
    return checkString
}

console.log(checkPalindrome(testString))
console.log(checkPalindrome(anotherTestString))