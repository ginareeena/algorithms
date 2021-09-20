/* 
Given a sentence of words broken up by spaces, how can we translate every word to pig latin?
Design a program to take a word as an input, and then encode it into Pig Latin. A Pig Latin is an encrypted word in English, which is generated by doing the following alterations:
The first vowel occurring in the input word is placed at the start of the new word along with the remaining alphabet of it. The alphabet is present before the first vowel is shifted, at the end of the new word it is followed by “ay”. 

Examples:
Input: s = "paris"
Output: arispay

Input: s = "amazon"
Output: amazonay
*/

function pigLatinify(word) {
  let vowels = ["a", "e", "i", "o", "u"]; //check first letter if vowel //return it with 'ay" appending // otherwise we will return the word with that first letter +ay at the end
  let newWord = "";
  if (vowels.includes(word[0])) {
    return (word += "ay");
  } else {
    let newWord = "";
    for (let i = 1; i < word.length; i++) {
      newWord += word[i];
    }
    newWord += word[0] += "ay";
    return newWord;
  }
}

console.log(pigLatinify("amazon"));
console.log(pigLatinify("paris"));
