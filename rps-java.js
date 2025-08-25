function computerChoice() {
    let randomNumber = Math.random() * 3
    let computerChoice = ""
    if (0 < randomNumber && randomNumber < 1) {
        computerChoice = "ROCK"
    } else if (1 < randomNumber && randomNumber < 2) {
        computerChoice = "PAPER"
    } else {
        computerChoice = "SCISSORS"
    }
    return computerChoice
}

function userChoice() {
    let isValid = false
    while (isValid == false) {
        let userInput = prompt("Please Choose Rock, Paper, or Scissors").toUpperCase()
        if (userInput == "ROCK" || userInput == "PAPER" || userInput == "SCISSORS") {
            console.log(userInput)
            return userInput
        }
    }
}


function simulateGame() {
    
    function gameRound(userHand, computerHand) {
        let result = ""

        if (computerHand == userHand) {
            result = "This round was a tie!"
        } else {
            if (computerHand == "ROCK" && userHand == "PAPER" ||
                computerHand == "PAPER" && userHand == "SCISSORS" ||
                computerHand == "SCISSORS" && userHand == "ROCK"
            ) {
                result = "You won this round!"
                userScore++
            } else {
                result = "You lost this round"
                computerScore++
            }
        }

        console.log("Computer Picked: " + computerHand)
        console.log("You Picked: " + userHand)
        console.log(result)
    }

    let userScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        let userHand = userChoice()
        let computerHand = computerChoice()
        gameRound(userHand, computerHand)
        console.log("-------------------------")
    }


    console.log("Your Score: " + userScore)
    console.log("Computer Score " + computerScore)

    if (userScore > computerScore) {
        console.log("Congrats! You Won The Game!")
    } else if (computerScore > userChoice) {
        console.log("You Lost The Game")
    } else {
        console.log("This Game Was a Tie!")
    }
}

simulateGame()