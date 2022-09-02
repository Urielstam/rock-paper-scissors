// Create getPlayerChoice function
// Add event listener of type click on each button
// For the event recieve the button text/content 



let playerSelection = "";
let result = document.querySelector('div.result');
let player = document.querySelector('.player');
let computer = document.querySelector('.computer');
let wins = 0;
let losses = 0;

const buttons = document.querySelectorAll('button');
for(const button of Array.from(buttons)) {
    button.addEventListener('click', (event) => {
        playerSelection = event.target.textContent;
        game(playerSelection);
    });
}

function getComputerChoice() {
    let array = ["rock", "paper", "scissors"];
    let numberOfItems = array.length;
    let randomNumber = Math.floor(Math.random() * numberOfItems);
    return array[randomNumber];
}



// Create playRound function to see who's the winner
// First check if it is a draw, bcs that is the simplest case
// Else check if for each possibilty whether or not player will lose or win

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return result.textContent = "Draw";
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return result.textContent = "You Win! Scissors beats Paper";
        } else {
            return result.textContent = "You lose! Rock beats Scissors";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return result.textContent = "You Win! Paper beats Rock"; 
        } else {
            return result.textContent = "You Lose! Scissors beats paper";
        }
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return result.textContent = "You Win! Rock beats Scissors"; 
        } else {
            return result.textContent = "You Lose! Paper beats Rock";
        }
    }
}

// once wins or losses reaches 5, display winner


function game(playerSelection) {
    let computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);
    let stringArr = String(winner).split(" ");
    if (stringArr.length > 1) {
        let text = "";
        if(stringArr[1] === "Win!") {
            wins++;
            if (wins !== 5) {
                player.textContent = `Player: ${wins}`;
            }
            else {
                text = "Excellent, You Win Game!";
                displayWinner(text);
            }
        } 
        else {
            losses++;
            if (losses !== 5) {
                computer.textContent = `Computer: ${losses}`;
            }
            else {
                text = "Uh Oh, You Lost Game :(";
                displayWinner(text);
            }
        }
    }
}

function displayWinner (text) {
    let displayWinnerMsg = document.createElement('div');
    if (player) document.body.removeChild(player);
    if (computer) document.body.removeChild(computer);
    if (result) document.body.removeChild(result);
    if (!displayWinnerMsg.textContent) {
        displayWinnerMsg.textContent =  text;
        document.body.appendChild(displayWinnerMsg);
    };
}


