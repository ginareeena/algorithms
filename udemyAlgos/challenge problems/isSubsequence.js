//write a functon which takes in two strings and checks
//whether characters in the first string form a subsequence in the
//second string. Order matters! But they don't need to be sequential

// isSubsequence("sing", "sting") // true
// isSubsequence("abc", "acb")  // false
// isSubsequence("cat", catamaran) //true

//multiple pointers solution:

function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;
  let idx1 = 0;
  for (let idx2 = 0; idx2 < str2.length; idx2++) {
    let letter1 = str1[idx1];
    let letter2 = str2[idx2];

    if (letter1 === letter2) {
      // if current letters are equal AND we are at the last letter for str1 return true
      if (idx1 === str1.length - 1) {
        return true;
        // if current letters are equal AND we are not at the end you can move i forward... j will move forward after each check regardless
      } else {
        idx1++;
        // j will be moved forward automatically!
      }
    }
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("hello world", "hello")); // false
console.log(isSubsequence("cat", "catamarran")); // true
console.log(isSubsequence("sing", "sting")); // true

console.log(isSubsequence("cat", "cat")); // true
console.log(isSubsequence("cat", "scoat")); // true
console.log(isSubsequence("dat", "scoat")); // false

// initially thought the words had to be sequential in
// the second string not just "in order"
// these return true only if the letters are sequential:
// isSubsequenceSequential("sing", "sting") // false

function isSubsequenceSlice(str1, str2) {
  if (str1.length > str2.length) return false;
  let endIdx = str1.length;

  for (let i = 0; i < str2.length; i++) {
    slice = str2.slice(i, i + endIdx);
    if (slice === str1) {
      return true;
    }
  }
  return false;
}

//this solution only returns true if the words are sequential:

function isSubsequenceSequential(str1, str2) {
  if (str1.length > str2.length) return false;
  let slice = "";
  for (let i = 0; i < str1.length; i++) {
    let letter = str2[i];
    slice += letter;
    if (slice === str1) return true;
  }

  return false;
}
