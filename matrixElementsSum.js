//Return the sum of all values in a matrix that do not appear below a 0

const testMatrix = 
[[0,1,1,2], 
 [0,5,0,0], 
 [2,0,3,3]]

function matrixElementsSum(matrix) {
    //store start at index value
    let totalSum = 0
    for (let i = 0; i < matrix.length; i++) {
        let innerArray = matrix[i]
        let innerArrayLength = matrix[i].length;
        for (let j = 0; j < innerArrayLength; j++) {
            if (innerArray[j] === 0 && i+1 < matrix.length) {
                matrix[i+1][j] = 0
            }
            totalSum += innerArray[j]
        }
    }
    return totalSum
}


matrixElementsSum(testMatrix)