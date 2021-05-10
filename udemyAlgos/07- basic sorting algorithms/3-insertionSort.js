// Big O
// Worst Case: O(n^2) nested loops
// Best Case: O(n)

// If data is almost sorted would work well where data is sorted
// and coming in live and needs to be input

// my solution

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
  for (var i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
    }
    // if we use let then j will be undefined here because of scope differences
    // between let and var
    // if we use var j will have a wider scope
    arr[j + 1] = currVal;
    console.log(arr);
  }
  return arr;
}

// trying to refactor it to use let:
function insertionSortLet(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > currVal) {
        let temp = currVal;
        arr[j + 1] = arr[j];
        arr[j] = temp;
      } else {
        arr[j + 1] = currVal;
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort([2, 1, 3, 55, 8]));
