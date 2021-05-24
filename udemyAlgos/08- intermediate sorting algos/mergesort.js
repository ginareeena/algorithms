//helper function to merge arrays

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

console.log(merge([1, 2, 4], [2, 5]));
console.log(merge([1, 2, 4, 6], [2, 5]));
console.log(merge([2, 2, 4, 6], [1, 5]));
console.log(merge([], [8, 10]));
