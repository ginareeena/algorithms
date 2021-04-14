//pointers

//write a function that takes an array of sorted integers
// it should return an array of the first two numbers that sum up to zero
// if there are none it should return undefined

function sumZero(numArr) {
  let leftIdx = 0;
  let rightIdx = numArr.length - 1;
  while (leftIdx < rightIdx) {
    if (numArr[leftIdx] + numArr[rightIdx] === 0) {
      return [numArr[leftIdx], numArr[rightIdx]];
    }
  }
  return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
