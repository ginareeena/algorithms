//given an array of strings capitalize the first letter of each string
//in the array using recursion

function capitalizeFirst(arr) {
  let newArr = [];
  let newStr = arr[0][0].toUpperCase() + arr[0].slice(1);

  if (arr.length === 1) {
    return [newStr];
  }
  newArr.push(newStr);
  let nextArr = arr.slice(1);
  newArr = newArr.concat(capitalizeFirst(nextArr));
  return newArr;
}

//udemy's solution
//backwards from yours just like capitalize words

function capitalizeFirstAlt(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

console.log(capitalizeFirst(["cats", "are", "cool"]));

// another version of this problem
//given a string capitalize the first letter of each word in the string using recursion

function capitalizeFirstStr(str) {
  let strArr = str.split(" ");
  if (str.length === 0) {
    return "";
  }
  let newStr = strArr[0].slice(0, 1).toUpperCase() + strArr[0].slice(1);
  let nextStr = strArr.slice(1).join(" ");

  newStr = newStr += ` ${capitalizeFirst(nextStr)}`;
  return newStr;
}
