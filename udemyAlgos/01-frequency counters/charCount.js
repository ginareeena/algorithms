//frequency counters

//return a function that counts all the characters in a string
// this uses regex to count only alphanumeric characters

function charCount(str) {
  let charObj = {};
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i].toLowerCase();
    if (/[a-z0-9]/.test(currChar)) {
      if (charObj[currChar]) {
        charObj[currChar]++;
      } else {
        charObj[currChar] = 1;
      }
    }
  }
  return charObj;
}

// refactored to use a "let of" loop
// and to do a cleaner check for obj[char]

function charCountTwo(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// using a ternary for the obj[char] check
function charCount3(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] ? ++obj[char] : (obj[char] = 1);
    }
  }
  return obj;
}

//Big O= O(n) where n is the length of the string

// Performance for regular expressions can vary
// depending on what you're doing, the browser that you're in
// Chrome had some issues a while back
// Here's a more performance efficient solution:

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric 0-9
    !(code > 64 && code < 91) && // upper alpha A-Z
    !(code > 96 && code < 123) // lower alpha a-z?
  ) {
    return false;
  }
  return true;
}

function charCountCode(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
