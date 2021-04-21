// write a recursive function which accepts an object
// and returns an array of all the values
// in the object that are strings

function collectStrings(obj) {
  let strArr = [];
  for (let key in obj) {
    let val = obj[key];
    if (typeof val === "string") {
      strArr.push(val);
    } else if (typeof val === "object") {
      strArr = strArr.concat(collectStrings(val));
    }
  }
  return strArr;
}

//test obj
const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
