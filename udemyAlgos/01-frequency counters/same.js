//frequency counters

// write a function called same that takes two arrays
// it should return true if every value in the first array
// has a square in the second
// frequency of values must be the same

// my solution
function same(arrA, arrB) {
  let squares = {};
  if (arrA.length !== arrB.length) {
    return false;
  }
  for (let i = 0; i < arrA.length; i++) {
    let num = arrA[i];
    squares[num] = ++squares[num] || 1;
  }
  for (let j = 0; j < arrB.length; j++) {
    let num = arrB[j];
    let square = Math.sqrt(num);
    if (squares[square]) {
      squares[square]--;
    } else {
      return false;
    }
  }
  return true;
}

//Big O = O(n) where n is length of the string

//udemy's naive solution

function sameTwo(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIdx = arr2.indexOf(arr1[i] ** 2);
    if (correctIdx === -1) {
      return false;
    }
    arr2.splice(correctIdx, 1);
  }
  return true;
}

//udemy's optimized solution:

function sameThree(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let counter1 = {};
  let counter2 = {};

  for (let val of arr1) {
    counter1[val] = ++counter1[val] || 1;
  }
  for (let val of arr2) {
    counter2[val] = ++counter2[val] || 1;
  }
  for (let key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false;
    }
    if (counter2[key ** 2] !== counter1[key]) {
      return false;
    }
  }
  return true;
}
