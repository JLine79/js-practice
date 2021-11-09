//Return the sum of all values in a matrix that do not appear below a 0

const testMatrix = 
[[0,1,1,2], 
 [0,5,0,0], 
 [2,0,3,3]]

function matrixElementsSum(matrix) {
    
}

//matrixElementsSum(matrix)


// create variable to store non-zero values
let storeValues = 0;
const storeZeros = []
const storeSingles = (matrix) => {
    // loop the first array
    const firstArray = matrix[0]
    for (let j = 0; j < firstArray.length; j++) {
        let currentValue = firstArray[j]
        if (currentValue === 0) {
            storeZeros.push(j)
        } else {
            storeValues += currentValue
        }
    }
}

storeSingles(testMatrix)

const checkNext = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j === storeZeros[j] || j === 0) {
                continue
            }

            else {
                storeValues += j
            }
        }
    }
    console.log(storeValues)
}

checkNext(testMatrix)
    
  

// Store index positions of 0s
// Store values of positions that are not 0s
// Look at values of numbers that are not 0 in previous array
// Store index positions of 0s
// Store values of positions that are not 0s
