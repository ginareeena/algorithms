//helper function to merge arrays

function mergeArr(arrA, arrB) {
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < arrA.length && j < arrB.length) {
    let currA = arrA[i];
    let currB = arrB[j];
    console.log("A, B, newArr", currA, currB, newArr);

    currA < currB ? newArr.push(currA, currB) : newArr.push(currB, currA);
    i++;
    j++;
  }
  if (j < arrB.length) {
    let lastElem = newArr[newArr.length - 1];
    while (j < arrB.length) {
      if (lastElem < arrB[j]) {
        newArr.push(arrB[j]);
        j++;
      } else {
        let temp = lastElem;
        newArr[newArr.length - 1] = arrB[j];
        newArr.push(temp);
        j++;
      }
    }
  } else if (i < arrA.length) {
    let lastElem = newArr[newArr.length - 1];
    while (i < arrA.length) {
      if (lastElem < arrA[i]) {
        newArr.push(arrA[i]);
        i++;
      } else {
        let temp = lastElem;
        newArr[newArr.length - 1] = arrA[i];
        newArr.push(temp);
        i++;
      }
    }
  }
  return newArr;
}

console.log(mergeArr([1, 2, 4], [2, 5]));
console.log(mergeArr([1, 2, 4, 6], [2, 5]));
console.log(mergeArr([2, 2, 4, 6], [1, 5]));
