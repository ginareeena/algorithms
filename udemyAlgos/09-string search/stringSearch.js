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
console.log(naiveStringSearch(word, "omg"));
console.log(naiveStringSearch(word, "omgggggggggggggggg"));
