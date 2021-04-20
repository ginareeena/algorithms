//[[1], [2], [3]]
///[1, [2, [3, 4], [[5]]]]

function flatten(arr) {
  let newArr = [];

  if (arr.length === 1) {
    return arr[0];
  }
  for (let i = 0; i < arr.length; i++) {
    let currVal = arr[i];
    if (!Array.isArray(currVal)) {
      newArr.push(currVal);
      // console.log("currVal", currVal);
    } else if (currVal.length === 1) {
      return newArr.concat(flatten(currVal));
    } else {
      return newArr.concat(flatten(currVal));
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1,2,3,4,5]
console.log(flatten([1, 2, 3, [4, [[5]]]])); // [1,2,3,4,5]
console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1,2,3,4,5]
