// write a recursive function that given an array of words
// returns a new array with each word capitalized

function capitalizeWordsMin(arr) {
  let newArr = [];
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let newWord = arr[0].toUpperCase();
  newArr.push(newWord);
  return newArr.concat(capitalizeWordsMin(arr.slice(1)));
}

//udemy's solution

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

let words = ["i", "am", "a", "cat"];
// console.log(capitalizeWords(words));

console.log("my solution:");
console.log(capitalizeWordsMin(words));
console.log("udemys solution:");
console.log(capitalizeWords(words));
