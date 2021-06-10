// collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;

//given an array of competions and an array of results
//write a function that returns the winner of the competition
//first team= home team,
//second team= away team
//1= home win, 0= away win
//for each win a team gets 3 points

//example of compeitions and results arrays

//competitions= [
//    ["HomeTeam", "AwayTeam"]
//    ["HTML","C#"],
//    ["C#", "Python"],
//    ["Python","HTML"],
//   ]

//results= [1, 0, 0, 1]

function tournamentWinner(competitions, results) {
  let highScore = 0;
  let winningTeam = "";

  let scoreObj = {};
  for (let i = 0; i < competitions.length; i++) {
    let currMatch = competitions[i];
    let result = results[i];
    if (result === 0) {
      scoreObj[currMatch[1]] = scoreObj[currMatch[1]] + 3 || 3;
    } else if (result === 1) {
      scoreObj[currMatch[0]] = scoreObj[currMatch[0]] + 3 || 3;
    }
  }

  for (team in scoreObj) {
    let score = scoreObj[team];
    if (score > highScore) {
      highScore = score;
      winningTeam = team;
    }
  }
  return winningTeam;
}

// refactoring the above

// let [homeTeam, awayTeam] = competitions[i];
function tournamentWinner(competitions, results) {
  let highScore = 0;
  let winningTeam = "";

  let scores = {};
  for (let i = 0; i < competitions.length; i++) {
    let [homeTeam, awayTeam] = competitions[i];
    let result = results[i];
    if (result === 0) {
      scores[awayTeam] = scores[awayTeam] + 3 || 3;
    } else if (result === 1) {
      scores[homeTeam] = scores[homeTeam] + 3 || 3;
    }
  }

  for (team in scores) {
    let score = scores[team];
    if (score > highScore) {
      highScore = score;
      winningTeam = team;
    }
  }
  return winningTeam;
}

// alternate solution:

const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
  let currentBestTeam = "";
  let scores = {[currentBestTeam]: 0};

  for (let i = 0; i < competitions.length; i++) {
    let result = results[i];
    let [homeTeam, awayTeam] = competitions[i];
    let winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
    updateScores(winningTeam, scores);
    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}

function updateScores(team, scores) {
  scores[team] = scores[team] + 3 || 3;
}
