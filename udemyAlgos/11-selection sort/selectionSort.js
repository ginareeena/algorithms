function selectionSort(arr) {
  let min = arr[0];
  let minIdx = 0;
  let startIdx = 0;
  // how many comparisons we make
  for (let i = arr.length; i > 0; i--) {
    for (let j = startIdx; j < arr.length; j++) {
      console.log("i,j, min, arr[j]", i, j, min, arr[j]);

      // console.log("min, arr[j], arr", min, arr[j], arr);
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
    //up the count idx so the comparisons start at the next number!
    startIdx++;
    // we have to update our min otherwise we will never swap again because we're comparing to that first smallest number
    min = arr[startIdx];
  }
  return arr;
}

console.log(selectionSort([52, 3, 14, 6]));
