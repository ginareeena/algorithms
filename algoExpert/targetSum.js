// write a function that takes in a non-empty array of distinct integers
// and an integer representing a target sum
// if any two numbers in the input array sum up to the target sum
// the function should return them in an array in any order
// if no two numbers sum up to the target sum, the function should return
// an empty array
// It should return immediately the first two that sum up to the target

//Big O= O n^2

function twoNumberSum3(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    let currNum = array[i];
    for (let j = i + 1; j < array.length - 1; j++) {
      let nextNum = array[j];
      if (currNum + nextNum === targetSum) {
        return [currNum, nextNum];
      }
    }
  }
  return [];
}

// solution 2:
// creates an object and subtracts currNum from potentialMatch
// to see if it equals target sum
// returns the two numbers if
// Big O= O n^2

function twoNumberSum2(array, targetSum) {
  const nums = {};
  for (let num of array) {
    // the value that would add up to targetSum with the current num
    const potentialMatch = targetSum - num;
    // looks for it in the object
    if (potentialMatch in nums) {
      //if we find it we return the two nums
      return [num, potentialMatch];
    } else {
      //otherwise we store it in the obj
      nums[num] = true;
    }
  }
  return [];
}

//solution using pointers and sort

function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let currentSum = array[left] + array[right];
    if (targetSum === currentSum) {
      return [array[left], array[right]];
    } else if (currentSum > targetSum) {
      right--;
    } else if (currentSum < targetSum) {
      left++;
    }
  }
  return [];
}
