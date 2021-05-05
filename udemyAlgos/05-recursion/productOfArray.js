//write a function that takes in an array of numbers
// and returns the product of all of them

function productOfArray(numArr) {
  if (numArr.length === 0) {
    return 1;
  }
  return numArr[0] * productOfArray(numArr.slice(1));
}
