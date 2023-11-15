// Q1, Case 1
let team1ScoreCase1 = calcAverage(44,23,71);
let team2ScoreCase1 = calcAverage(65,54,49);
console.log("Case 1:");
checkWinner(team1ScoreCase1,team2ScoreCase1);
// Q1, Case 2
let team1ScoreCase2 = calcAverage(85,54,41);
let team2ScoreCase2 = calcAverage(23,34,27);
console.log("Case 2:");
checkWinner(team1ScoreCase2,team2ScoreCase2);

// Q2
let number1 = getNumberInput(`enter Number 1`);
let number2 = getNumberInput();
console.log(`Summation of two inputs: ${number1 + number2}`);

// Q3
let numberCount = getNumberInput("Enter how many numbers");
console.log(summationOfUserInput(numberCount));