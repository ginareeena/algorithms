//function that returns only the elements from the evens index of original array

//Big O= O(n)
//don't need to loop through every element can just increment i += 2

//best solutiont sta
function onlyElementsAtEvenIndex(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 2) {
    newArray.push(array[i]);
  }
  return newArray;
}

// my old solution
function onlyElementsAtEvenIndexAlt2(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

//udemy's solution
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

// function onlyElementsAtEvenIndexAlt(array) {
//   //initializes an array half the length
//   var newArray = Array(Math.ceil(array.length / 2));
//   for (var i = 0; i < array.length; i++) {
//   if (i % 2 === 0) {
//   newArray[i / 2] = array[i];
//   }
//   }
//   return newArray;
//   }
//   Instead of looping one at a time and then doing mod on i, you can just do this
//   for (let i = 0; i < array.length; i += 2)
