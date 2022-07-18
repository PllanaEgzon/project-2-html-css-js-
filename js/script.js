let selectionButtons = document.querySelectorAll("[data-selection]")
let finalColumn = document.querySelector("[data-final-column]")
let compuerScoreSpan = document.querySelector("[data-computer-score")
let yourScoreSpan = document.querySelector("[data-your-score")
let SELECTIONS = [
    {
        name: "rock",
        emoji: '&#9994',
        beats: "scissors"
        
    },
    {
        name: "paper",
        emoji: '&#9995',
        beats: "rock"
    },
    {
        name: "scissors",
        emoji: '&#9996',
        beats: "paper"
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click", e => {
        let selectionName = selectionButton.dataset.selction
        let selction = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selectionName)
    })
})

function makeSelection(selction) {
    let computerSelection = randomSelection()
    let yourWinner = isWinner(selction, computerSelection)
    let computerWinner = isWinner(computerSelection, selction)
    
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) addScore(yourScoreSpan)
    if (computerWinner) addScore(compuerScoreSpan)
}

function addScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) +1
}

function addSelectionResult(selction, winner) {
    let div = document.createElement("div")
    div.innerText = selection.emoji
    div.classList.add("result-selection")
    if (winner) div.classList.add("winner")
    finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection () {
    let randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}