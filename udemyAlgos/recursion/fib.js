//write a recursive function call fib which accepts a number
//and returns the nth number in the fibonacci sequence
//the fib sequence starts with 1 and 1 , where every num after that is equal to the
//sum of the previous two nums

function fib(num) {
  // why isn't this <=1 ? why wouldn't 2 return 2?
  if (num <= 2) return 1;

  return fib(num - 1) + fib(num - 2);
}

//challenge use memoization to make it more efficient!

console.log(fib(10)); //55
console.log(fib(4)); //3
console.log(fib(28)); //317811
