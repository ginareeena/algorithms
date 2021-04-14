//write a function that returns the number of
//unique values in an array
//returns 0 if array is empty

// My Solution with a for loop:
// Big O= O(n) linear

function countUniqueValuesLoop(arr) {
  let seen = {};
  let count = 0;
  left = 0;
  right = arr.length - 1;
  if (arr.length === 0) {
    return count;
  }
  for (let num of arr) {
    if (!seen[num]) {
      seen[num] = 1;
      count++;
    }
  }

  return count;
}

// my solution with multiple pointers:

function countUniqueValues(arr) {
  let i = 0;
  let j = 1;

  if (arr.length === 0) {
    return i;
  }

  // example array:  1 1 2 3
  // marks the next run through the loop

  while (j < arr.length) {
    let first = arr[i]; // 1* 1 2 3  // 1* 1 2 3  // 1 2* 2 3
    let second = arr[j]; // 1 1* 2 3  // 1 1 2* 3  // 1 2 2 3*

    if (first === second) {
      j++; // 1 1 2* 3 // not equal // no equal (doesn't run)
    } else if (first !== second) {
      // equal  // 1* 1 2 3 !== 1 1 2* 3   // 1 2* 2 3 !== 1 2 2 3*
      i++; // 1 1* 2 3  // 1 2 2* 3
      arr[i] = arr[j]; //1 2* 2 3 // 1 2 3* 3
      if (j === arr.length - 1) {
        return i + 1; //return the index that i is at +1
      } else {
        j++; //1 2 2 3* //
      }
    }
  }
}

// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 6, 7])); // 7 <- counts 4 once
// console.log(countUniqueValues([1, 2, 3, 5, 6, 7])); // 6 <- counts 4 once
// console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 6, 7])); // 7 <- counts 4 once

// console.log(countUniqueValuesLoop([1, 2, 3, 4, 4, 4, 5, 6, 7])); // 7
// console.log(countUniqueValuesLoop([1, 2, 3, 5, 6, 7])); // 6
// console.log(countUniqueValuesLoop([1, 2, 3, 4, 5, 6, 6, 7])); //
