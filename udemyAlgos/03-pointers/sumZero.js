//pointers

//write a function that takes an array of sorted integers
// it should return an array of the first two numbers that sum up to zero
// if there are none it should return undefined

function sumZero(numArr) {
  let left = 0;
  let right = numArr.length - 1;
  while (left < right) {
    let sum = numArr[left] + numArr[right];
    if (sum === 0) {
      return [numArr[left], numArr[right]];
    } else if (sum > 0) {
      // if the number is too large make the biggest number smaller
      right--;
    } else {
      left++;
    }
  }
  return undefined;
}

//Time Complexity= O(n)
//Space Complexity= O(1)

console.log(sumZero([-4, -2, -1, 0, 1, 2, 3]));
