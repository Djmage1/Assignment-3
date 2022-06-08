let cpuMove;
let playerMove;
const gameArray = ["ROCK", "PAPER", "SCISSORS"];
let playerCount = 0;
let cpuCount = 0;

function computerPlay() {
    cpuMove = gameArray[Math.floor(Math.random()*gameArray.length)];

    return cpuMove;
}

function gamePlay() {
    playerMove = prompt("Rock, Paper or Scissors?").toUpperCase();

    while(!gameArray.includes(playerMove)) {
        playerMove = prompt("Please choose between Rock, Paper or Scissors?").toUpperCase();
    }

    computerPlay();

    alert("Bot plays: " + cpuMove + 
          "\nYou play: " + playerMove);

    outcomeCalc();
}

function outcomeCalc() {
    switch(playerMove) {
        case gameArray[0]:
            if(cpuMove == gameArray[0]) {
                alert("DRAW");
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[1]) {
                alert("You lose");
                cpuCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[2]) {
                alert("You win");
                playerCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            break;

        case gameArray[1]:
            if(cpuMove == gameArray[0]) {
                alert("You win");
                playerCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[1]) {
                alert("DRAW");
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[2]) {
                alert("You lose");
                cpuCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            break;

        case gameArray[2]:
            if(cpuMove == gameArray[0]) {
                alert("You lose");
                cpuCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[1]) {
                alert("You win");
                playerCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[2]) {
                alert("DRAW");
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            break;
    }
}

function game() {
    playerCount = 0;
    cpuCount = 0;

    for (let i = 0; i < 5; i++) {
        alert("Round " + (i + 1));
        gamePlay();
    }

    if(playerCount > cpuCount) {
        alert("You have won the tournament");
        console.log("You win");
    }
    else if(playerCount < cpuCount) {
        alert("You have lost the tournament");
        console.log("You lose");
    }
    else {
        alert("The tournament is a DRAW");
        console.log("The tournament is a DRAW");
    }
}