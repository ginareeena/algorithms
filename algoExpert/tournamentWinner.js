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

  scoreObj = {};
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
