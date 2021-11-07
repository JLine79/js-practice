//For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.

//There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

//For a = [2, 2], the output should be firstDuplicate(a) = 2;

//For a = [2, 4, 3, 5, 1], the output should be firstDuplicate(a) = -1.

const a = [2, 1, 3, 5, 3, 2];

function firstDuplicate(a) {
 let uniqueList = new Set ()

 for (let i = 0; i < a.length; i++) {
     if (uniqueList.has(a[i])) return (a[i]);
     else uniqueList.add(a[i]);
 }

 return ("No duplicates found");
}

console.log(firstDuplicate(a));