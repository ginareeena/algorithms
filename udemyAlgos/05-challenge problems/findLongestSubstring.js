//write a function that returns the longest substring of unique characters
// findLongestSubstring("thisisawesome") // 6

// reference for how to do a sliding window
// tempSum = tempSum - arr[i - num] + arr[i];

// this works for some of the examples but not all
function findLongestSubstringAttempt(str) {
  let seen = {};
  let maxCount = 0;
  let tempStr = "";
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (!seen[letter]) {
      tempStr += letter;
      seen[letter] = 1;
    } else {
      maxCount = Math.max(tempStr.length, maxCount);
      let firstLetter = tempStr[0];
      tempStr = tempStr.slice(1);
      seen[firstLetter] = 0;
    }
  }
  return maxCount;
}

// attempt that didn't work because we werent sliding the window
// we would check for longest string and then start next check at the end of that string
// when we want to be starting from the second letter of the first string

//udemy's solution:
// the difference is they save the index in the seen object! so you can count from there.
// genius

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring("thisisawesome")); //6
console.log(findLongestSubstring("longestsubstring")); //8
