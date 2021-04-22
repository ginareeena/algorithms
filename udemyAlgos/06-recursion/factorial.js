//write a function that takes a number and returns a factorial of that number
// a factorial = the product of an integer and all numbers below it
// 4! = 4 * 3 * 2 * ! = 24
// 0! = 1

// iterative
function factorialIt(num) {
  let product = 1;
  if (num === 0 || num === 1) {
    return 1;
  }
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

//recursively
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return (num *= factorial(num - 1));
}

console.log(factorial(4));
console.log(factorial(1));
