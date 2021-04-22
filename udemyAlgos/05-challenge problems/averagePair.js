// given a sorted array of integers and a target value
// determine if there is a pair of values in the array where
// the average of the pair equals the target average
// there may be more than one pair that matches the average target

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    console.log("avg:", avg);
    if (avg === target) {
      return true;
    } else if (avg > target) {
      right--;
    } else if (avg < target) {
      left++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
