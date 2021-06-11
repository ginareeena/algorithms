//Given an array of positive integers representing the values of coins in
//your possession, write a function that returns the minimum amount of change
//you *cannot* create

//ex: coins=[1,2,5] // result = 4
//if you're given no coins the minimum amount you can't create is 1.

function nonConstructibleChange(coins) {
  let sortedCoins = coins.sort((a, b) => a - b);
  let currentMaxChange = 0;
  for (const coin of sortedCoins) {
    if (coin > currentMaxChange + 1) {
      return currentMaxChange + 1;
    }
    currentMaxChange += coin;
  }
  return currentMaxChange + 1;
}

// how this works
// because we've figured out we can make every number up to the current number
// we know we can make everynumber up to it as well...
// because we can add all those previous numbers to it!
