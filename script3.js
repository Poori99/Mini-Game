const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

while(true) {
    const playerChoice = prompt("Enter rock, paper, scissors or q(quit) : ");

    if (playerChoice.toLowerCase() === "q"){
        break;
    }
    
    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        console.log("Enter valid choice");
        continue;
    }

    const choices = ["rock", "paper", "scissors"]
    const computerChoiceIndex = Math.round(Math.random()*2);
    const computerChoice = choices[computerChoiceIndex];

    console.log("Computer Choice:", computerChoice);

    if (playerChoice === computerChoice) {
        console.log("It's a tie");
        ties++;
    } else if ((playerChoice==="paper" && computerChoice==="rock") ||
            (playerChoice==="rock" && computerChoice==="scissors") ||
            (playerChoice==="scissors" && computerChoice==="paper")) {
        console.log("You won!!");
        wins++;
    } else {
        console.log("You loss!!");
        losses++;
    }
}

console.log("wins:", wins, "losses:", losses, "ties:", ties);

