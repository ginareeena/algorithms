//write a function that returns the number of
//unique values in an array
//returns 0 if array is empty

// My Solution with a for loop and freq counter:
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

//multiple pointers solution:

// initialize i, and create a for loop with j
function countUniqueValuesAlt(arr) {
  let i = 0;
  if (arr.length === 1) {
    return 0;
  }
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] == arr[j];
    }
  }
  return i + 1;
}

// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 6, 7])); // 7 <- counts 4 once
// console.log(countUniqueValues([1, 2, 3, 5, 6, 7])); // 6 <- counts 4 once
// console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 6, 7])); // 7 <- counts 4 once

// console.log(countUniqueValuesLoop([1, 2, 3, 4, 4, 4, 5, 6, 7])); // 7
// console.log(countUniqueValuesLoop([1, 2, 3, 5, 6, 7])); // 6
// console.log(countUniqueValuesLoop([1, 2, 3, 4, 5, 6, 6, 7])); //

// console.log(countUniqueValuesAlt([1, 2, 3, 4, 4, 4, 5, 6, 7])); // 7
// console.log(countUniqueValuesAlt([1, 2, 3, 5, 6, 7])); // 6
// console.log(countUniqueValuesAlt([1, 2, 3, 4, 5, 6, 6, 7])); //
