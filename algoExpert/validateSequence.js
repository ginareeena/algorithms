//given two non-empty arrays of integers
// write a function that determines whether the second array
//is a subsequence of the first one.

//A subsequence of an array is a set of numbers that aren't necessarily
//adjacent in the array but that are in the same order as they appear in the array.
//Ex: [1,3,4] and [2,4] are subsequences of [1,2,3,4]

function isValidSubsequence(array, sequence) {
  if (sequence.length > array.length) {
    return false;
  }

  let aIdx = 0;
  let sIdx = 0;

  while (aIdx < array.length && sIdx < sequence.length) {
    if (array[aIdx] === sequence[sIdx]) sIdx++;
    aIdx++;
  }
  if (sIdx === sequence.length) {
    return true;
  }
  return false;
}
