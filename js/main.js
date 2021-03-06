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
    restart.style.display = 'block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    console.log(playerChoice, computerChoice);
    const winner = getWinner(playerChoice, computerChoice);
    console.log(winner);
    showWinner(winner, computerChoice, playerChoice);
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

function showWinner(winner, computerChoice, playerChoice) {
    if (winner === 'player') {
        scoreboard.player++;
        result.innerHTML = `
            <h1 class="text-win"> You Won!</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice}</strong>
            `;
    } else if (winner === 'computer') {
        scoreboard.computer++;
        result.innerHTML = `
            <p> Your <strong>${playerChoice}</strong> lost to ${computerChoice}.</p>

            <i class="text-lose fas fa-hand-${computerChoice} fa-10x"></i>

        `;
    } else {
        result.innerHTML = `
            <h1> Draw!</h1>
                <i class="fas fa-hand-${computerChoice} fa-10x"></i>
                <p>You both chose <strong>${computerChoice}.</strong>
                    `;
    }
    score.innerHTML = `
        <p>Player: ${scoreboard.player} </p>
                    <p>Computer: ${scoreboard.computer} </p>
                    `;

    modal.style.display = 'block';
}

// Start Over

function startOver() {
    window.location.reload();
}

// Clear Modal

function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

//Event Listeners

choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
// modal.addEventListener('click', clearModal);
restart.addEventListener('click', startOver);