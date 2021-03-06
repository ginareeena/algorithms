// Time Complexity= O(n^2)
// Doesn't perform any better with nearly sorted data
// Space Complexity is better than bubble sort because we only make one swap at the end

function selectionSort(arr) {
  let min = arr[0];
  let minIdx = 0;
  let startIdx = 0;
  // decrement how many comparisons we make
  for (let i = arr.length; i > 0; i--) {
    for (let j = startIdx; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIdx = j;
      }
    }
    if (startIdx !== minIdx && arr[startIdx] > arr[minIdx]) {
      //the one we started with is not the same idx swap
      let temp = arr[startIdx];
      // set the one we started with to min
      arr[startIdx] = min;
      //set min to the one we started with
      arr[minIdx] = temp;
    }
    //start at the next index
    startIdx++;
    // update min to the first number in our new "window"
    min = arr[startIdx];
  }
  return arr;
}

// they use the lowest index to make the comparison
// rather than save the value

function selectionSortAlt(arr) {
  let lowest;
  for (let i = 0; i < arr.length; i++) {
    lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSortAlt([52, 3, 14, 6]));
