//return the sum of all numbers starting from one and up to given number "n"

function addUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
//above is O(n)

// this one is O(1):
function addUpToOptimized(n) {
  return (n * (n + 1)) / 2;
}

/// can paste below into browser to test performance

// var t1 = performance.now();
// addUpTo(10000000000);
// var t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// var t3 = performance.now();
// addUpToOptimized(10000000000);
// var t4 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

console.log(addUpTo(2));
console.log(addUpTo(4));
console.log(addUpTo(3));
console.log(addUpToOptimized(3));
