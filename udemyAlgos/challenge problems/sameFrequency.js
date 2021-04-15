//given two positive integers
//find out if the two numbers have the same frequency of digits

function sameFrequency(num1, num2) {
  let lookup = {};
  let numStr1 = String(num1);
  let numStr2 = String(num2);

  if (numStr1.length !== numStr2.length) return false;

  for (let i = 0; i < numStr1.length; i++) {
    let num = numStr1[i];
    lookup[num] = ++lookup[num] || 1;
  }
  for (let i = 0; i < numStr2.length; i++) {
    let num = numStr2[i];
    if (lookup[num]) {
      lookup[num]--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 218)); // true

//udemy's solution:
// they don't decrement they just run through the keys 3 times

function sameFrequencyAlt(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
