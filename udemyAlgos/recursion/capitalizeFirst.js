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

//given an array of strings capitalize the first letter of each string in the array using recursion
function capitalizeFirst(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return [];
  }
  let newStr = arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1);
  newArr.push(newStr);
  let nextArr = arr.slice(1);
  newArr = newArr.concat(capitalizeFirst(nextArr));
  return newArr;
}

console.log(capitalizeFirst(["cats", "are", "cool"]));
