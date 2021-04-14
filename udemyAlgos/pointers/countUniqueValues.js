//write a function that returns the number of
//unique values in an array
//returns 0 if array is empty

// attempt at pointers
function countUniqueValues(arr) {
  let seen = {};
  let count = 0;
  left = 0;
  right = arr.length - 1;
  if (arr.length === 0) {
    return count;
  }
  while (left < right) {
    if (!seen[left]) {
      seen[left] = 1;
      count++;
    } else if (seen[left]) {
      left++;
    }
    if (!seen[right]) {
      seen[right] = 1;
      count++;
    } else if (seen[right]) {
      right--;
    }
  }
  return count;
}

// with a for of loop
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

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 6, 7])); // 7 <- counts 4 once
console.log(countUniqueValues([1, 2, 3, 5, 6, 7])); // 6 <- counts 4 once
console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 6, 7])); // 7 <- counts 4 once

console.log(countUniqueValuesLoop([1, 2, 3, 4, 4, 4, 5, 6, 7])); // 7
console.log(countUniqueValuesLoop([1, 2, 3, 5, 6, 7])); // 6
console.log(countUniqueValuesLoop([1, 2, 3, 4, 5, 6, 6, 7])); //
