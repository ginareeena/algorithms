//write a function which takes an array of positive integers
// and an integer
// it should return the minimal length of a contiguous subarray of which
//the sum is greater than or equal to the integer passed to the function
// if there isn't one return 0

//minSubarrayLen([2,3,1,2,4,3],7) // 2
//minSubarrayLen([2,1,6,5,4],9) // 2
//minSubarrayLen([3,1,7,11,2,9,8,21,62],52) // 1 because 62 is greater than 52
//minSubarrayLen([2,3,1,2,4,3],95) // 0
//minSubarrayLen([1,4,16,22,5,7,8,9,10],55) // 5

//is the array sorted? no
// pointers only work if it's sorted... hmmm

function minSubarrayLenAttempt(arr, target) {
  // return # of numbers to make target
  let tempSum = 0;
  let n = 1;
  // increment n each time...
  // while (n < arr.length) {
  for (let i = 0; i < arr.length; i++) {
    if (n > arr.length) return 0;
    for (let j = 0; j < j + n; j++) {
      tempSum = tempSum - arr[j - n] + arr[j];
      if (tempSum === target) return n;
      n++;
    }
    tempSum = 0;
  }
  return 0;
}

//udemy's solution

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

//tests
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62], 52)); // 1 because 62 is greater than 52
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 95)); // 0
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
