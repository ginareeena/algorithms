//write a function that returns the max sum
//of "n" consecutive integers in an array
//([1,2,3,4], 2) should return 7 because 4+3 is the largest sum of 2(n) numbers
//are they sorted? no

// Solution using Sort
// Big O of sort=   O(n * log n) // Terrible!

function maxSubArraySumSort(arr, n) {
  let sortedArr = arr.sort();
  console.log("sortedArr", sortedArr);
  let sum = 0;
  for (let i = sortedArr.length - (n + 1); i < sortedArr.length; i++) {
    sum += sortedArr[i];
  }
  return sum;
}

//solution using a window and a helper function

//Helper function adds the window nums:

//O(n)
function sumAll(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function maxSubArraySum(arr, n) {
  let sum = 0;
  //O(n)
  for (let i = 0; i < arr.length; i++) {
    //O(n)
    let window = arr.slice(i, i + n);
    //O(n)
    let windowSum = sumAll(window);
    windowSum > sum ? (sum = sumAll(window)) : (sum = sum);
  }
  return sum;
}

console.log("maxSubArraySum([1, 2, 3], 2):", maxSubArraySum([1, 2, 3], 2)); // 6
console.log(maxSubArraySum([1, 2, 3, 8, 1, 4, 2], 3)); //8 + 1 + 4= 13

// if we wanted to write a sum func to take an unknown number of loose args:
// window is an array so we don't need this but good to remember how to do this:
function sumAllTwo(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}
