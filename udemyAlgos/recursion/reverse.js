//write a recursive function called reverse which takes a string
// and returns a new str in reverse

function reverse(str) {
  if (str.length <= 1) {
    return str;
  }
  return str[str.length - 1] + reverse(str.slice(0, -1));
}

//udemy's solution backwards from yours! interesting!

function reverse2(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("cat"));
console.log(reverse2("cat"));
