//function that returns on the elements from the evens index of original array

function onlyElementsAtEvenIndex(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function onlyElementsAtEvenIndexAlt(array) {
  //initializes an array half the length
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}

let cats = ["kiki", "luna", "salem"];

// interesting that they initialize the array length
// test of that below:
let catsArr = Array(Math.ceil(cats.length / 2));
console.log("catsArr", catsArr); //[<2 empty items>]

//my solution
console.log(onlyElementsAtEvenIndex(cats)); // ["kiki", "salem"]
// their solution
console.log(onlyElementsAtEvenIndexAlt(cats)); //["kiki", "salem"]
