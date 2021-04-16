//given an array of integers and a number "n"
//write a function which finds the max sum of a subarray
// of n number of consecutive integers in that array

//sliding window

function maxSubarraySum(arr, n) {
  let tempSum = 0;
  let maxSum = 0;
  if (n > arr.length) return null;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    // here we are subtracting the first number from the prior sum and adding the next num
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
