
//Big O =  O(n)?
//write a function that returns the max sum
//of "n" consecutive integers in an array
//([1,2,3,4], 2) should return 7 because 4+3 is the largest sum of 2(n) numbers
//are they sorted? no

function maxSubArrSum(arr,num){
  if (num > arr.length) return null;

  let tempSum= 0
  let maxSum=0

  //gets the first "window": aka the sum of the first "num" numbers
  for(let i=0;i<num;i++){
    maxSum += arr[i]
  }

// save first window sum in temp Sum:
  tempSum= maxSum

// now we will start our next window at the index of "num"

 for(let i=num; i<arr.length;i++){
   // tempSum = itself minus the first value from the previous "window" + the next value
   tempSum= tempSum - arr[i-num] + arr[i]
   maxSum= Math.max(tempSum, maxSum)
 }

 return maxSum
}

console.log("maxSubArrSum([1, 2, 3], 2):", maxSubArrSum([1, 2, 3], 2)); // 6
console.log("maxSubArrSum([1, 2, 3, 8, 1, 4, 2], 3):",maxSubArrSum([1, 2, 3, 8, 1, 4, 2], 3)); //8 + 1 + 4= 13


// syntax for passing an unknown number of args to a function

function sumAllTwo(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}