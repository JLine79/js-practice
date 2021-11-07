const mySet1 = new Set()

mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]
const o = {a: 1, b: 2}
mySet1.add(o)

mySet1.add({a: 1, b: 2})   // o is referencing a different object, so this is okay

//console.log(mySet1)

const mySet2 = new Set()
mySet2.add(1)
mySet2.add(5)
mySet2.add(7)
mySet2.add(9)
//console.log(mySet2)

//const intersection = new Set([...mySet1].filter(x => mySet2.has(x)))
//console.log(intersection)

//const difference = new Set([...mySet1].filter(x => !mySet2.has(x)))
//console.log(difference)

//mySet1.forEach(function(value) {
    //console.log(value)
//  })

function union(setA, setB) {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    console.log (_union)
}
//union(mySet1, mySet2)

function intersection(setA, setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }
    console.log (_intersection)
}

//intersection(mySet1, mySet2)

function symmetricDifference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem)
        } else {
            _difference.add(elem)
        }
    }
    console.log (_difference)
}
//symmetricDifference(mySet1, mySet2)

function difference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    console.log (_difference)
}

//difference(mySet1, mySet2)

let myArray = ['value1', 'value2', 'value3']

// Use the regular Set constructor to transform an Array into a Set
let mySet = new Set(myArray)

mySet.has('value1')     // returns true

// Use the spread operator to transform a set into an Array.
console.log([...mySet]) // Will show you exactly the same Array as myArray
console.log(mySet)