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

    userChoiceDisplay.textContent = "You Picked: " + userHand
    computerChoiceDisplay.textContent = "Computer Picked: " + computerHand
    roundWinnerDisplay.textContent = result
    scoreDisplay.textContent = "Your Score: " + userScore + " || " + "Computer Score: " + computerScore

}

let userScore = 0
let computerScore = 0

const buttons = document.querySelectorAll(".ROCK, .PAPER, .SCISSORS")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (userScore < 5 && computerScore < 5) {
            gameRound(e.target.textContent, computerChoice())
        } else {
            let winner = ""
            if (userScore > computerScore) {
                winner = "Congrats, you won with 5 points!"
            } else {
                winner = "You lost, please play again!"
            }
            gameResultDisplay.textContent = "Game over: " + winner
        }
    })
})

const gameDataContainer = document.querySelector(".gameResults")
const scoreDisplay = document.createElement("p")
const userChoiceDisplay = document.createElement("p")
const computerChoiceDisplay = document.createElement("p")
const roundWinnerDisplay = document.createElement("p")
const gameResultDisplay = document.createElement("p")

gameDataContainer.append(userChoiceDisplay)
gameDataContainer.append(computerChoiceDisplay)
gameDataContainer.append(roundWinnerDisplay)
gameDataContainer.append(scoreDisplay)
gameDataContainer.append(gameResultDisplay)
