const reset_btn = document.getElementById('reset-btn');
const rock_btn = document.getElementById('rock-btn');
const paper_btn = document.getElementById('paper-btn');
const scissors_btn = document.getElementById("scissors-btn");

const player_choose = document.getElementById('player-choose');
const computer_choose = document.getElementById('computer-choose');
const playerscore = document.getElementById('playerscore');
const computerscore = document.getElementById('computerscore');
const systemMessage = document.getElementById('system-message');
const winnerInfo = document.getElementById('winner-info');

const labels = [player_choose, computer_choose, systemMessage, winnerInfo];
const scoreLabels = [playerscore, computerscore]
const playerRemoteControls = [rock_btn, paper_btn, scissors_btn];

const variants = ['rock','paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*variants.length);
    return variants[computerChoice];
}

function playRound(humanChoice, computerChoice) {
    let msg = ''
    switch(humanChoice){
        case 'rock':
            if(computerChoice === 'paper'){
                computerScore++;
                msg = `Human lose - computer win! Paper beats Rock`;
            }else if(computerChoice == 'scissors'){
                playerScore++;
                msg = `Human win - computer loose! Rock beats Scissors`;
            }else{
                msg = 'Draw'
            }
            break;
        case 'paper':
            if(computerChoice === 'scissors'){
                computerScore++;
                msg = `Human lose - computer win! Scissors beats Paper`;
            }else if(computerChoice == 'rock'){
                playerScore++;
                msg = `Human win - computer loose! Paper beats Rock` ;
            }
            else{
                msg = 'Draw';
            }
            break;
        case 'scissors':
            if(computerChoice === 'rock'){
                computerScore++;
                msg = `Human lose - computer win! Rock beats Scissors `;
            }else if(computerChoice == 'paper'){
                playerScore++;
                msg = `Human win - computer loose!  Scissors beats Paper`;
            }else{
                msg = 'Draw';
            }
            break;
        
        default:
            msg = "Unpredictable result";
            break;
        }                    
        winnerInfo.textContent = msg;
    }

function playGame(humanSelect) {
    
    const computerSelect = getComputerChoice();

    player_choose.textContent = humanSelect.toString();
    computer_choose.textContent = computerSelect.toString();
    playRound(humanSelect, computerSelect);
        
    let msg = ''
    if(computerScore > playerScore){
        msg = 'Computer win!';
    }else if(computerScore === playerScore){
        msg = 'Draw between!';
    }else{
        msg = 'Human win!';
    }

    computerscore.textContent = computerScore;
    playerscore.textContent = playerScore;
    if (playerScore === 5 || computerScore == 5) {
        systemMessage.textContent = msg;
        playerRemoteControls.forEach(button =>{
            button.disabled = true;
        })
    }
}

function reset(){
    computerScore = 0;
    playerScore = 0;  
    
    labels.forEach(label=>{
        label.textContent = ''
    })
    scoreLabels.forEach( label=>{
        label.textContent = 0
    })

    playerRemoteControls.forEach(button =>{
        button.disabled = false;
    })
}

rock_btn.addEventListener('click',()=>{
    playGame('rock');
});
paper_btn.addEventListener('click', ()=>{
    playGame('paper');
})
scissors_btn.addEventListener('click', ()=>{
    playGame('scissors');
})
reset_btn.addEventListener('click', ()=>{
    reset();
})