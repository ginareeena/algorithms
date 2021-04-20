// write a function called power that accepts a base and an exponent
// it should return the power of the base to the exponent
// should mimic the functionality of Math.pow()
// don't worry about negative bases/exponents

//iterative solution
function power1(base, exp) {
  let product = base;
  for (let i = 1; i < exp; i++) {
    product *= base;
  }
  return product;
}

//recursive solution
function power(base, exp) {
  let product = base;

  if (exp <= 1) {
    return base;
  }
  return product * power(base, exp - 1);
}

console.log(power(2, 0)); // 1 -> 2
console.log(power(2, 2)); // 4 -> 2 * 2
console.log(power(2, 4)); //16  -> 2 * 2 * 2 * 2
