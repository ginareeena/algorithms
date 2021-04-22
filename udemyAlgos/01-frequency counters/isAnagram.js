//frequency counters

// compare two strings and see if they consist of the same characters
// return true if they do (are anagrams)
// false if they aren't

function isAnagram(str1, str2) {
  let letters = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (let letter of str1) {
    letters[letter] = ++letters[letter] || 1;
  }
  for (let letter of str2) {
    console.log("letters[letter]", letters[letter]);
    if (letters[letter]) {
      letters[letter]--;
    } else {
      return false;
    }
  }
  return true;
}

//big O= O(n + n) = O(n) where n is the length of the string

//TESTS:
// console.log(isAnagram("cat", "atc"))
// console.log(isAnagram("ccat", "atcc"))
// console.log(isAnagram("ccat", "atccc"))
// console.log(isAnagram("at", "atc"))

//optimizing: consider edge cases, non alpha numeric characters?

//udemy's solution:

function isValidAnagram(str1, str2) {
  const lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < str1.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
    // lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  return true;
}
