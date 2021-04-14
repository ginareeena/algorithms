// write a function called same that takes two arrays
// it should return true if every value in the first array has a square in the second
//frequency of values must be the same

// my solution
function same(arrA, arrB) {
  // create obj to keep track of numbers seen
  // store numbers from arrA in object with frequency as value
  // loop through second array
  // check if obj
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

//Big O = O(n)
// simplifies from n + n where n is the length of the strings
