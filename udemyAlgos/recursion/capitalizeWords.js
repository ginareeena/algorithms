// write a recursive function that given an array of words
// returns a new array with each word capitalized

function capitalizeWords(arr) {
  let newArr = [];
  let firstWord = arr[0];
  let newWord = "";
  if (arr.length === 0) {
    return [];
  }
  for (let i = 0; i < firstWord.length; i++) {
    let letter = firstWord[i];
    newWord += letter.toUpperCase();
  }

  if (newWord.length > 0) {
    newArr.push(newWord);
  }
  return newArr.concat(capitalizeWords(arr.slice(1)));
}

let words = ["i", "am", "a", "cat"];
console.log(capitalizeWords(words));
