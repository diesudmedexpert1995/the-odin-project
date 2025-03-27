const gameBoard = document.querySelector("#gameboard-container");
//console.log(gameBoard);
const gameInfo = document.querySelector("#info");
//console.log(gameInfo);

const gameReset = document.getElementById("reset-button")

const gameCells = Array(9).fill("");
//console.log(gameCells)

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


gameInfo.textContent = "Circles go first"
let tile = "circle"

const circleWins = (array, allSquares) => array.every(cell => allSquares[cell].firstChild?.classList.contains("circle"))
const crossWins = (array, allSquares) => array.every(cell =>  allSquares[cell].firstChild?.classList.contains("cross"))

function checkTie(){
    const allSquares = document.querySelectorAll(".square")
    const isBoardFull = [...allSquares].every(square => square.firstChild)
    if (isBoardFull) {
        gameInfo.textContent = "It`s a tie!"
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
    }
}

function checkScore() {
    const allSquares = document.querySelectorAll(".square")

    winningCombos.forEach(array =>{
        const isCirclesWins = circleWins(array, allSquares)

        const isSquaresWins = crossWins(array, allSquares)

        let winnerDeclared = false
        
        if(isCirclesWins){
            gameInfo.textContent = "Circle wins"
            winnerDeclared = true
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }

        else if(isSquaresWins){
            gameInfo.textContent = "Cross wins"
            winnerDeclared = true
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }
        if(!winnerDeclared){
            checkTie();
        }
    
    })

}

function addGameElement(e) {

    const goDisplay = document.createElement("div")
    goDisplay.classList.add(tile)

    e.target.append(goDisplay)
    tile = tile === "circle" ? "cross": "circle"
    gameInfo.textContent = "Now "+tile+" move"
    e.target.removeEventListener("click", addGameElement)
    checkScore()
}

function createBoard() {
    gameCells.forEach((cell, index)=>{
        const cellElement = document.createElement("div")
        cellElement.classList.add("square")
        cellElement.addEventListener("click", addGameElement)
        gameBoard.append(cellElement)
    })
}

function cleanBoard() {
    gameBoard.innerHTML = ""
    createBoard()
    tile = "circle"
    gameInfo.innerHTML = "Circles go first"
}

gameReset.addEventListener("click", cleanBoard);

createBoard();