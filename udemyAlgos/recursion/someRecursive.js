//write a recursive function which accepts an array + a callback
//function returns true if a single value in the array returns true
// when passed to the callback
//otherwise it returns false

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, callback) {
  if (arr.length === 0) {
    return false;
  }
  if (callback(arr[0])) {
    return true;
  }
  return someRecursive(arr.slice(1), callback);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); //true
console.log(someRecursive([4, 6, 8, 9], isOdd)); //true
console.log(someRecursive([4, 6, 8], isOdd)); //false
