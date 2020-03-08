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

function showWinner(winner, computerChoice) {
    if (winner === 'player') {
        scoreboard.player++;
        result.innerHTML = `
            <h1 class="text-win"> You Won!</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice}</strong>
            `;
    } else if (winner === 'computer') {
        scoreboard.player++;
        result.innerHTML = `
            <h1 class="text-lose"> You Lost!</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice}</strong>
            `;
    } else {
        result.innerHTML = `
        <h1> Draw!</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong>
        `;
    }
    score.innerHTML = `
        <p>Player: ${scoreboard.player} </p>
        <p>Computer: ${scoreboard.computer} </p>
    `;

    modal.style.display = 'block';
}

//Event Listeners

choices.forEach(choice => choice.addEventListener('click', play)) 