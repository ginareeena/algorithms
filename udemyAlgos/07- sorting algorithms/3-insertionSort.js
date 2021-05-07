//start by picking second element
//compare to next and swap if needed
//continue to next element
//and if it's incorrect iterate through sorted portion (left side) until find the right position
//repeat until the array is sorted

//.insert() takes an index to insert and an item
//array.insert(index, item);

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      let prevVal = arr[j];
      if (currVal > prevVal) {
        break;
      }
      if (currVal < arr[j]) {
        let temp = currVal;
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(insertionSort([2, 1, 3]));
