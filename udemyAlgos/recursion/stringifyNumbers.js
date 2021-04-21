// write a function that takes an object and finds all
// the values that are numbers and converts them to strings
// original object should not be modified!

function stringifyNumbers(obj) {
  let newObj = {};
  for (let key in obj) {
    let val = obj[key];
    if (typeof val === "boolean" || typeof val === "string") {
      newObj[key] = val;
    } else if (typeof val === "number") {
      newObj[key] = String(val);
    } else if (Array.isArray(val)) {
      newObj[key] = val;
    } else if (typeof val === "object") {
      newObj[key] = stringifyNumbers(val);
    }
  }
  return newObj;
}

//udemys solution:

function stringifyNumbersAlt(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let objA = { 1: 1, 2: 2, 3: 3 };

let objB = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log("stringifyNumbers(objA):");
console.log(stringifyNumbers(objA));
console.log("stringifyNumbers(objB):");
console.log(stringifyNumbers(objB));
