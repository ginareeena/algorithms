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

const getLevelFromScore = (score) => {
  if (score >= 300) {
    if (score < 600) {
      return "Poor";
    }
    if (score < 700) {
      return "Fair";
    }
    if (score < 750) {
      return "Good";
    }
    if (score < 800) {
      return "Excellent";
    }
    if (score < 851) {
      return "Elite";
    }
  }
};

const levelsOrder = ["Poor", "Fair", "Good", "Excellent", "Elite"];

const red = "red";
red += "blue";
//"redblue"

function codingScoreReportPercent(scores = []) {
  const scoreCounter = scores.reduce((acc, score) => {
    const scoreLevel = getLevelFromScore(score);
    if (scoreLevel) {
      if (acc[scoreLevel]) {
        acc[scoreLevel]++;
      } else {
        acc[scoreLevel] = 1;
      }
    }
    return acc;
  }, {});

  const total = Object.values(scoreCounter).reduce(
    (sum, curr) => sum + curr,
    0
  );

  const scorePercentages = Object.keys(scoreCounter).reduce((acc, key) => {
    acc[key] = ((scoreCounter[key] / total) * 100).toFixed(2);
    return acc;
  }, {});

  const sortedScorePercentages = Object.keys(scorePercentages).sort((a, b) => {
    const aVal = +scorePercentages[a];
    const bVal = +scorePercentages[b];
    if (bVal === aVal) {
      return levelsOrder.indexOf(b) - levelsOrder.indexOf(a);
    }
    return bVal - aVal;
  });

  return sortedScorePercentages.map(
    (level) => `${level}: ${scorePercentages[level]}%`
  );
}

let scoreArr = [330, 723, 730, 825];

console.log(codingScoreReportPercent(scoreArr));

// ['Poor: 25.00%', 'Good: 50.00%', 'Elite: 25.00%']
// ['Good: 50.00%', 'Elite: 25.00%', 'Poor: 25.00%']

// const scorePercentages = Object.keys(scoreCounter).reduce(
//   (acc, key) => ({
//     ...acc,
//     [key]: ((scoreCounter[key] / total) * 100).toFixed(2),
//   }),
//   {}
// );
