// write a recursive function that given an array of words
// returns a new array with each word capitalized

function capitalizeWordsMine(arr) {
  let newArr = [];
  let newWord = arr[0].toUpperCase();

  if (arr.length === 1) {
    return [newWord];
  }
  newArr.push(newWord);
  return newArr.concat(capitalizeWordsMine(arr.slice(1)));
}

//your solution slices off the first word and pushes it to newArr..
//and concats result of the recursive call on the old arr minus that first element

//udemy's makes recursive call on the old arr minus the last element
//then pushes the last word uppercased to the result
// and returns it

//udemy's solution

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  //recursive call on the array minus the last element
  // array: ["i", "like", "cats"]
  // res equals recursive call on: ["i", "like"]
  let res = capitalizeWords(array.slice(0, -1));

  // slices last element in array, makes upper case- pushes
  //
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

let words = ["i", "am", "a", "cat"];
// console.log(capitalizeWords(words));

console.log("my solution:");
console.log(capitalizeWordsMine(words));
console.log("udemys solution:");
console.log(capitalizeWords(words));

// let cat = "cat";
//cat.slice(1) // "at"
//cat.slice(0,-1) // "ca"

//These two are the same:
//cat.slice(-1) // "t"
//cat.slice(cat.length-1) // "t"

//cat.slice(2) // "t"
