//helper function to merge/sort arrays

function merge(arrA, arrB) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arrA.length && j < arrB.length) {
    if (arrB[j] > arrA[i]) {
      results.push(arrA[i]);
      i++;
    } else {
      results.push(arrB[j]);
      j++;
    }
  }
  while (i < arrA.length) {
    results.push(arrA[i]);
    i++;
  }
  while (j < arrB.length) {
    results.push(arrB[j]);
    j++;
  }
  return results;
}

// tests for merge helper function
// console.log(merge([1, 2, 4], [2, 5]));
// console.log(merge([1, 2, 4, 6], [2, 5]));
// console.log(merge([2, 2, 4, 6], [1, 5]));
// console.log(merge([], [8, 10]));

//pseudo code for merge sort
//split array in half til it's composed of arrays with length 1 or less
//

//Time Complexity: O(n log n)
// the rate we have to split the array -> log n
// grows with n -> n * log n

//Space Complexity: O(n)

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([1, 78, 4, 8, 9]));
