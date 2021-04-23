//write a function that takes a string and a search

function stringSearch(haystack, needle) {
  let count = 0;
  let hIdx = 0;
  let nIdx = 0;
  if (needle.length > haystack.length) {
    return 0;
  }
  while (hIdx < haystack.length) {
    if (haystack[hIdx] === needle[nIdx]) {
      if (nIdx === needle.length - 1) {
        count++;
        hIdx++;
        nIdx = 0;
      } else {
        hIdx++;
        nIdx++;
      }
    } else {
      hIdx++;
      nIdx = 0;
    }
  }
  return count;
}

let word = "wowomgzomg";

//udemy's naive solution:
function naiveStringSearch(haystack, needle) {
  let count = 0;
  for (let h = 0; h < haystack.length; h++) {
    for (let n = 0; n < needle.length; n++) {
      if (needle[n] !== haystack[n + h]) break;
      if (n === needle.length - 1) count++;
    }
  }
  return count;
}

// udemy's "KNP solution" is being reworked by udemy teacher
// search KMP string search algorithm

console.log(stringSearch(word, "omg"));
console.log(stringSearch(word, "omgggggggggggggggg"));

console.log(naiveStringSearch(word, "omg"));
console.log(naiveStringSearch(word, "omgggggggggggggggg"));
