//given two positive integers
//find out if the two numbers have the same frequency of digits

function sameFrequency(num1, num2) {
  let lookup = {};
  let numStr1 = String(num1);
  let numStr2 = String(num2);

  if (numStr1.length !== numStr2.length) {
    return false;
  }
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
