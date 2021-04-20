//write a recursive function called reverse which takes a string
// and returns a new str in reverse

function reverse(str) {
  if (str.length === 0) {
    return str;
  }
  return str[str.length - 1] + reverse(str.slice(0, -1));
}

console.log(reverse("cat"));
