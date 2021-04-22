//write a function which accepts a variable num of args
// and checks whether there are any duplicates passed in

//my frequency counter solution:

function areThereDuplicates(...args) {
  let seen = {};
  for (let i = 0; i < args.length; i++) {
    let currArg = args[i];
    if (seen[currArg]) {
      return true;
    } else {
      seen[currArg] = 1;
    }
  }
  return false;
}

//udemy's counter solution:
function areThereDuplicatesAlt() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

//udemys multiple pointers solution:
// but this isn't optimal... because we're using sort
function areThereDuplicatesAlt2(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

//udemys one liner:
function areThereDuplicatesAlt3() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 2));
