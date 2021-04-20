//write a recursive function isPalindrome that returns true if a string passed to it
//is a palindrome otherwise false

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

//udemy's solution:
function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  }
  if (str.length === 2) {
    return str[0] === str[1];
  }
  // wouldn't we would want to return false right away so we don't need to do more recursive calls? like this:

  // if (str[0] !== str[str.length - 1]) {
  //   return false;
  // }

  //this doesn't seem optimal

  if (str[0] !== str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(isPalindrome("cac"));
console.log(isPalindrome("bcacb"));
console.log(isPalindrome("zcacb"));
console.log(isPalindrome("bczcb"));
console.log(isPalindrome("bfzcb"));
