// Create function getComputerChoice that will randomly return a choice
// Create array of choices
// Find how many items there are in array
// Based on number of items, get a random number from 0 to array.length
// return the random item at index of random number
// console.log to see if works

function getComputerChoice() {
    let array = ["scissors", "paper", "rock"];
    let numberOfItems = array.length;
    let randomNumber = Math.floor(Math.random() * numberOfItems);
    return array[randomNumber];
}

// Create playRound function to see who's the winner
// First check if it is a draw, bcs that is the simplest case
// Else check if for each possibilty whether or not player will lose or win

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return "Draw!"
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper";
        } else {
            return "You lose! Rock beats Scissors";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win! Paper beats Rock"; 
        } else {
            return "You Lose! Scissors beats paper";
        }
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors"; 
        } else {
            return "You Lose! Paper beats Rock";
        }
    }
}

// Create a gamae function
// playRound 5 times

// Record wins in variable
    // Store the return value in a variable as string
    // split string by spaces and store in an array
    // if the array contains one item, output round as draw
    // if the array contains more than one item
    // check if item in index two equals Win! or Lose!
    // if Win! -> increment variable wins by 1
    // if Lose! -> increment losses by 1

// output if draw,loss or win based on wins
// if wins === losses -> output "Well Done, Draw."
// if wins > losses -> output "Excellent, You Win!"
// else output "Uh Oh, You Lose :("


function game(playerSelection) {
    let wins = 0;
    let losses = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        let stringArr = result.split(" ");
        if (stringArr.length > 1) {
            if(stringArr[1] === "Win!") {
                wins++;
            } else {
                losses++;
            }
        }
    }
    if (wins === losses) {
        return "Well Done, Draw.";
    }
    else if (wins > losses) {
        return "Excellent, You Win!";
    } else {
        return "Uh Oh, You Lose :(";
    }
}

console.log(game("Rock"));


