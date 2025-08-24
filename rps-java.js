function getComputerChoice() {
    let randomNumber = Math.random() * 3
    let choice = ""

    if (randomNumber >= 0 && randomNumber < 1) {
        choice = "rock"
    } else if (randomNumber >= 1 && randomNumber < 2) {
        choice = "paper"
    } else {
        choice = "scissors"
    }

    return choice
}

function getHumanChoice() {
    let validInput = false
    while (validInput == false) {
        let userInput = prompt("Choose Rock Paper or Scissors").toLowerCase()
        if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
            return userInput
        }
    }
}


function playGame() {
    function playRound(computerChoice, humanChoice) {
        console.log(computerChoice)
        console.log(humanChoice)
        if (computerChoice == "rock") {
            if (humanChoice == "paper") {
                humanScore++
            } else if (humanChoice == "scissors") {
                computerScore++
            } 
        } else if (computerChoice == "paper") {
            if (humanChoice == "scissors") {
                humanScore++
            } else if (humanChoice == "rock") {
                computerScore++
            }
        } else {
            if (humanChoice == "rock") {
                humanScore++
            } else if (humanChoice == "paper") {
                computerScore++
            }
        }

        console.log(computerScore)
        console.log(humanScore)
    }
    
    let humanScore = 0
    let computerScore = 0
    let numPlayed = 0
 
    while (numPlayed < 5) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(computerChoice, humanChoice)
        numPlayed++
    }

    if (humanScore == computerScore) {
        console.log("This game was a tie.")
    } else if (humanScore > computerScore) {
        console.log("You win! Good job!")
    } else {
        console.log("You lose. Better luck next time!")
    }
}

playGame()