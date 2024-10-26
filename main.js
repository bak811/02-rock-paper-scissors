<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<script>
    /* scoreboard*/
    let humanScore = 0;
    let computerScore = 0;
    let draw = 0;

/* Random AI generated choices*/
   function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() *3) +1;
    switch (randomNumber) {
            case 1:
                return "rock";
            case 2:
                return "paper";
            case 3:
                return "scissors";
    }
   }
   const result = getComputerChoice();

   /* User input choice*/
   function getHumanChoice(message) {
    let input; 
    do { 
        input = prompt(message || "Please choose: rock, paper, or scissors").toLowerCase();
    } while (!['rock', 'paper', 'scissors'].includes(input));
    return input;
}

/* winning logic */
function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

/* play round*/
function playRound () {
    const humanChoice = getHumanChoice();
    const computerChoice  = getComputerChoice();
    console.log (`You chose : ${humanChoice}`);
    console.log (`Computer chose: ${computerChoice}`);

const result = determineWinner(humanChoice, computerChoice); 
console.log(result);

    if (result === "You win!") {humanScore++;
    }
    else if (result === "You lose!") {computerScore++;
    }
    else {draw++;
    }
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}, Draws: ${draw}`);
}
/* total game rounds (first to 5)*/
while (humanScore < 5 && computerScore < 5) {
        playRound();
    }

    console.log("Game Over!");
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}, Draws: ${draw}`);


</script>

</body>
</html>