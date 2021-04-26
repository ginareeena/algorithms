//.sort((a,b)=>{a-b})
//takes a call back.. if neg it will sort a first if pos b first
//.sort((a,b)=>{a.length-b.length}) // sorts by length

// i controls how many comparisons are made
// each time j finishes i decrements
// because j runs until i-1 we make one fewer comparison each time
// this is how we avoid resorting the numbers already sorted at the end

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//ES2015 syntax newer way to write the swap
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], (arr[idx2] = [arr[idx2], arr[idx1]])];
  };
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

//non efficient solution
//runs through every single item multiple times and past end of loop
function bubbleSortNaive(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let numArr = [5, 2, 34, 22, 1];
console.log(bubbleSort(numArr));
console.log(bubbleSort([2, 7, 3, 1]));
