//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

//Example

//For inputArray = [3, 6, -2, -5, 7, 3], the output should be
//adjacentElementsProduct(inputArray) = 21.

//7 and 3 produce the largest product.

//const testArray = [-23, 4, -3, 8, -12]

//function adjacentElementsProduct(inputArray) {
  //  let findProduct = 0;
    //for (let i=0; i < inputArray.length-1; i++) {
      //let testProduct = (inputArray[i] * inputArray[i+1])
        //if (testProduct > findProduct){
        //    findProduct = testProduct
        //}
    //}
    //return findProduct
//}

//console.log(adjacentElementsProduct(testArray));

const testArray = [-23, 4, -3, 8, -12]

function adjacentElementsProduct(inputArray) {
    //set variable to store answer
    let findProduct;
    let productList = []
    // find & store all products in array (length -1 to get the final sum)
        for (let i=0; i < inputArray.length-1; i++) {
            let testProduct = (inputArray[i] * inputArray[i+1])
            productList.push(testProduct)
        }
    findProduct = Math.max(...productList);
    return findProduct;
    }
    
    console.log(adjacentElementsProduct(testArray));