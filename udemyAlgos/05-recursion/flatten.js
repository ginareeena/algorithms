//[[1], [2], [3]]
///[1, [2, [3, 4], [[5]]]]

//iterative solution

function flattenIt(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currVal = arr[i];
    console.log("currVal", currVal); // [1]

    if (Array.isArray(currVal)) {
      for (let j = 0; j < currVal.length; j++) {
        newArr.push(currVal[j]);
      }
    } else {
      newArr.push(currVal);
    }
  }

  return newArr;
}

//recursive solution

function flatten(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currVal = arr[i];
    console.log("currVal", currVal);

    if (Array.isArray(currVal)) {
      newArr = newArr.concat(flatten(currVal));
    } else {
      newArr.push(currVal);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1,2,3,4,5]
console.log(flatten([1, 2, 3, [4, [[5]]]])); // [1,2,3,4,5]
console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1,2,3,4,5]

let arr = [1, 2, 3];
arr.concat([4, 5]);
console.log(arr);
arr = arr.concat([4, 5]);
console.log(arr);

// concat creates a new array doesn't mutate the original!
// needed to reassign newArr = newArr.concat(recursiveCall)
// to capture the new value
