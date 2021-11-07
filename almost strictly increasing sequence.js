//Given a sequence of integers as an array, determine whether it is possible to obtain a 
//strictly increasing sequence by removing no more than one element from the array.

const testSequence =  [1, 2, 3, 4, 3, 6]

function almostIncreasingSequence(sequence) {
    let found = false;
    for (let i=0; i<sequence.length; i++) {
      if(sequence[i] <= sequence[i-1]) {
        if(found) {
          return false;
        }
        found = true;
        
        if(i === 1 || i + 1 === sequence.length) {
          continue;
        }
        else if (sequence[i] > sequence[i-2]) {
          sequence[i-1] = sequence[i-2];
        }
        else if(sequence[i-1] >= sequence[i+1]) {
          return false;
        }
      }
    }
    return true;
  }

almostIncreasingSequence(testSequence);