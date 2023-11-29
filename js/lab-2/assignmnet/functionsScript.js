
function calcAverage() {
    let score= 0;
    for (let i = 0; i < arguments.length; i++) {
        score += arguments[i];
    }
    return score / arguments.length;
}
const checkWinner = (team1, team2) => {
    const result = team1 > team2 ? "Team 1 wins"
        : team1 < team2 ? "Team 2 wins"
            : "It's a draw";
    console.log(result);
};

// Q2
function getNumberInput(message){
 let input =  prompt(message ?? "Enter a number: ");
 while (!input || isNaN(input)){
     input = prompt(`Invalid input. ${message} again: `);
 }
 return Number(input);
}

// Q3
function summationOfUserInput(numberCount){
    let sum = 0;
    for (let i = 0; i < numberCount; i++) {
        sum += getNumberInput(`is not a valid number${i}`);
    }
    return sum;
}

//////////////////////////// Testing ///////////////////////////////

// Q1, c, d
printVariables(3,5);
// Q1
function printVariables(value_1,value_2,value_3){
    console.log(`${value_1} - ${value_2} - ${value_3}`)
}