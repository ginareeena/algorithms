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

console.log(isPalindrome("cac"));
console.log(isPalindrome("bcacb"));
console.log(isPalindrome("zcacb"));
console.log(isPalindrome("bczcb"));
console.log(isPalindrome("bfzcb"));
