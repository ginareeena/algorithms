/*
"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1]."
*/

function findSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let currSum = arr[left] + arr[right];
    if (currSum === target) {
      return [left, right];
    } else if (currSum < target) {
      left++;
    } else if (currSum > target) {
      right--;
    }
  }
  return null;
}

console.log(findSum([2, 7, 11, 15], 9));

// refactor

function findSum2(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let currSum = arr[left] + arr[right];
    if (currSum === target) return [left, right];
    if (currSum < target) left++;
    else right--;
  }
  return null;
}

console.log(findSum2([2, 7, 11, 15], 9));
