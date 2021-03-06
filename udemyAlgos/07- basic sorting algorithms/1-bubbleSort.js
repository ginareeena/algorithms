//Big O
//Time Complexity: O(n2)
//if nearly sorted and use noSwaps logic rounds down to O(n)
//Space Complexity isn't great because we are constantly swapping

// i controls how many comparisons are made
// each time j finishes i decrements
// because j runs until i-1 we make one fewer comparison each time
// this is how we avoid resorting the numbers already sorted at the end

// to optimize if nearly sorted we can add the noSwaps logic

function bubbleSort(arr) {
  // let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    // noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // noSwaps = false;
      }
    }
    // if (noSwaps) break;
  }
  return arr;
}

//ES2015 syntax newer way to write the swap
function bubbleSortNew(arr) {
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

//naive solution
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
