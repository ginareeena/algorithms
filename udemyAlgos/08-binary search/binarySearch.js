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
    console.log("currVal", currVal);
    if (currVal === val) {
      return middle;
    }
    if (currVal > val) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}

// not optimal but I challenged myself to write this recursively:
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

console.log(binarySearchNum(nums, 5));
// console.log(binarySearchNumRecursion(nums, 5));
