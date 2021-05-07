// Big O
// Worst Case: O(n^2) nested loops
// Best Case: O(n)

// If data is almost sorted would work well where data is sorted
// and coming in live and needs to be input

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      let prevVal = arr[j];
      if (currVal > prevVal) {
        break;
      }
      if (currVal < arr[j]) {
        arr[i] = arr[j];
        arr[j] = currVal;
      }
    }
  }
  return arr;
}

// udemy's solution
// line 32 doesn't work with let...
function insertionSortAlt(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currVal;
    console.log(arr);
  }
  return arr;
}

console.log(insertionSortAlt([2, 1, 3, 55, 8]));
