//write a function that takes an array and a value
//returns the index of the value if it's in the array
// -1 if it's not

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    let currVal = arr[i];
    if (currVal === val) {
      return i;
    }
  }
  return -1;
}

//Big O= O(n)
