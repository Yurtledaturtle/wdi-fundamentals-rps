////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move;
    if (move = !null) {
        return move;
    } else { move = getInput();
        return move;
    }
}


function getComputerMove(move) {
    var move;
    if (move = !null) {
        return move;
    } else { move = randomPlay();
        return move;
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    var playerMove = getPlayerMove(move);
    var computerMove = getComputerMove(move);
        if ((playerMove = 'rock' && computerMove = 'scissors') || (playerMove = 'scissors' && computerMove = 'paper') || (playerMove = 'paper' && computerMove = 'rock')) {
        winner = "player";
            return winner;
        } else if ((playerMove = 'rock' && computerMove = 'paper') || (playerMove = 'scissors' && computerMove = 'rock') || (playerMove = 'paper' && computerMove = 'scissors')) {
            winner = "computer";
            return winner;
        } else { winner = "tie";
            return winner;
        }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var roundCount = 5;
    for (var i = 0; i <= maxCount; i += 1) {
        getWinner();
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        if (getWinner() = "player") {
            playerWins += 1;
        } else if (getWinner() = "computer") {
            computerWins += 1;
        } else {console.log("It's a tie! Play again.");
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    
    return [playerWins, computerWins];
}

