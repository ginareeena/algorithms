//write a recursive function that returns the sum of all even
// numbers in an object which may contain nested objects

function nestedEvenSum(obj) {
  let sum = 0;
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let val = obj[key];
    if (val % 2 === 0) {
      sum += val;
    }
    if (typeof val === "object" && !Array.isArray(val)) {
      sum += nestedEvenSum(val);
    }
  }

  return sum;
}

//write a recursive function that returns the sum of all
// numbers in an object which may contain nested objects

function nestedSum(obj) {
  let sum = 0;
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let val = obj[key];
    if (typeof val === "number" && val % 2 === 0) {
      sum += val;
    }
    if (typeof val === "object" && !Array.isArray(val)) {
      sum += nestedEvenSum(val);
    }
  }

  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2)); // why should this be 10?? it's clearly 19
