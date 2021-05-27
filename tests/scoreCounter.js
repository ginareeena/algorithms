// given an array of scores between 300 and 850
// return an array of strings listing the percentage of the score Level in the set
// if score level frequencies are equal return the highest score level first
// don't return score levels that don't occur

// input : [330, 723, 730, 825]
// output: ['Good: 50.00%', 'Elite: 25.00%', 'Poor: 25.00%']

// Levels:
// Poor: 300-600
// Fair: 600-699
// Good: 700-749
// Excellent: 750-799
// Elite: 800+

// helper function to get Level from Score
function getLevelFromScore(num) {
  if (num >= 300) {
    if (num < 600) {
      return "Poor";
    }
    if (num < 700) {
      return "Fair";
    }
    if (num < 750) {
      return "Good";
    }
    if (num < 800) {
      return "Excellent";
    }
    if (num < 851) {
      return "Elite";
    }
  }
}

// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// we'll use this to sort our results
const levelsOrder = ["Poor", "Fair", "Good", "Excellent", "Elite"];

function codingScoreReportPercent(scores = []) {
  // creates scoreCounter object
  const scoreCounter = scores.reduce((acc, score) => {
    // get the level for each score and store frequency in scoreCounter
    const scoreLevel = getLevelFromScore(score);
    if (scoreLevel) {
      if (acc[scoreLevel]) {
        acc[scoreLevel]++;
      } else {
        acc[scoreLevel] = 1;
      }
      return acc;
    }
  }, {});
  // two ways to get the total # of scores for calculating average
  // second way is more foolproof

  const qty = scores.length;
  const total = Object.values(scoreCounter).reduce(
    (sum, curr) => sum + curr,
    0
  );

  const sortedPercentages = Object.keys(scoreCounter)
    .sort((a, b) => {
      const aVal = scoreCounter[a];
      const bVal = scoreCounter[b];
      // if they are equal we will sort by subtracting the index of b - a in the levels order array
      if (bVal === aVal) {
        return levelsOrder.indexOf(b) - levelsOrder.indexOf(a);
      }
      // otherwise we will sort in descending order
      return bVal - aVal;
    })
    // this will map strings to an array containing the information we want
    .map((scoreLevel) => {
      return `${scoreLevel}: ${(
        (scoreCounter[scoreLevel] / total) *
        100
      ).toFixed(2)}%`;
    });

  return sortedPercentages;
}

console.log(codingScoreReportPercent([330, 723, 730, 825]));

//alternate solution

//creates a second object before mapping to a final array
//instead of chaining sort and map onto the counter obj

// function codingScoreReportPercent(scores = []) {
//   const scoreCounter = scores.reduce((acc, score) => {
//     const scoreLevel = getLevelFromScore(score);
//     if (scoreLevel) {
//       if (acc[scoreLevel]) {
//         acc[scoreLevel]++;
//       } else {
//         acc[scoreLevel] = 1;
//       }
//     }
//     return acc;
//   }, {});

//   const total = Object.values(scoreCounter).reduce(
//     (sum, curr) => sum + curr,
//     0
//   );

//   const scorePercentages = Object.keys(scoreCounter).reduce((acc, key) => {
//     acc[key] = ((scoreCounter[key] / total) * 100).toFixed(2);
//     return acc;
//   }, {});

//   const sortedScorePercentages = Object.keys(scorePercentages).sort((a, b) => {
//     const aVal = +scorePercentages[a];
//     const bVal = +scorePercentages[b];
//     if (bVal === aVal) {
//       return levelsOrder.indexOf(b) - levelsOrder.indexOf(a);
//     }
//     return bVal - aVal;
//   });

//   return sortedScorePercentages.map(
//     (level) => `${level}: ${scorePercentages[level]}%`
//   );
// }

// another way of writing this:
// const scorePercentages = Object.keys(scoreCounter).reduce(
//   (acc, key) => ({
//     ...acc,
//     [key]: ((scoreCounter[key] / total) * 100).toFixed(2),
//   }),
//   {}
// );
