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
// Best Case= O(1) if we find it right away
// Worst Case = O(n) if we find it at the end

// Since as the length of the string grows so does
// the average time of the search Big O is: O(n)
