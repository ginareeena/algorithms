//binary search Big O

// write a function that accepts a sorted array and a search value
// use binary search to return the index of the value if in the array
// if nothing is found return -1

function binarySearchNum(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    let currVal = arr[middle];
    if (currVal === val) return middle;
    if (currVal > val) end = middle - 1;
    else start = middle + 1;
  }
  return -1;
}

//best case: O(1) // if we happen to find the element on the first try
//worst/avg case: O(log n): great!

//udemy's solution

function binarySearchNumAlt(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

//Big O = O(log n)

//udemy videos explaining log:
//https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344068#overview
//https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11162774#overview

// What is log?  -> the inverse of exponents
// the log of a number is equal to roughly the number of times
// you can divide that number by the base number before you get
// a value that's less than or equal to 1

//log baseNum(value) = exponent(aka power)
//log2(8)= 3  because 2^3= 8   (2 * 2 * 2 )

//log5(25)=2 // 5*5
//log5(5)= 1 // 5
//log2(25)= 4.64

// log calculator:
// https://www.logcalculator.net/

// O(log n) = shorthand for: log2(n)
// because we divide our array by 2 every time we search
// so 2 is our base number

// extra challenge: write a recursive function that returns true if
// a search val is in the array, and false if it is not
// less efficient but just some practice with recursion

function binarySearchNumRecursion(arr, val) {
  if (arr.length === 1) {
    if (arr[0] === val) {
      return true;
    } else {
      return false;
    }
  }
  let middleIdx = Math.floor((arr.length - 1) / 2);
  let num = arr[middleIdx];

  if (num === val) {
    return true;
  } else if (num > val) {
    let nextSearch = arr.slice(0, middleIdx);
    return binarySearchNumRecursion(nextSearch, val);
  } else if (num < val) {
    let nextSearch = arr.slice(middleIdx + 1);
    return binarySearchNumRecursion(nextSearch, val);
  }
  return false;
}

let nums = [1, 2, 3, 4, 5];

console.log(binarySearchNum(nums, 5)); // 4
console.log(binarySearchNum([1, 2, 3], 5)); // -1
console.log(binarySearchNum([1, 2, 3, 4, 5, 6, 7, 8], 5)); //4
// console.log(binarySearchNumAlt([1, 2, 3], 5)); // -1
// console.log(binarySearchNumAlt([1, 2, 3, 4, 5, 6, 7, 8], 5)); // 4
// console.log(binarySearchNumRecursion(nums, 5));
