// Write a function that takes in a non-empty array of integers
// that are sorted in ascending order and returns a new array of the
// same length with the squares of the original integers also sorted in ascending order

// you have to resort because negative numbers will square to postive values!
function sortedSquaredArray(array) {
  return array.map((x) => x * x).sort((a, b) => a - b);
}
