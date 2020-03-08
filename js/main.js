const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
};


//Play game
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    console.log(playerChoice, computerChoice);
    const winner = getWinner(playerChoice, computerChoice);
    console.log(winner);
}

//Comp Choice

function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// determine winner
function getWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (player === 'rock' && computer === 'scissors') {
        return 'player';
    } else if (player === 'rock' && computer === 'paper') {
        return 'computer';
    } else if (player === 'paper' && computer === 'scissors') {
        return 'computer';
    } else if (player === 'paper' && computer === 'rock ') {
        return 'player';
    } else if (player === 'scissors' && computer === 'paper') {
        return 'player';
    } else {
        return 'computer';
    }
}

//Event Listeners

choices.forEach(choice => choice.addEventListener('click', play)) 