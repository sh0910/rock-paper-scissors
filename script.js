'use strict';

const btnChoices = document.querySelectorAll('[data-choice]');
const imgPlayer = document.querySelector('.player-img');
const imgComputer = document.querySelector('.computer-img');
const resultText = document.querySelector('.result-text');
const scorePlayer = document.querySelector('.score-player');
const scoreComputer = document.querySelector('.score-computer');
const btnReset = document.querySelector('.btn-play-again');
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal-text');

const choices = ['rock', 'paper', 'scissors'];
const score = [0, 0]; // [player, computer]

let playerSelection;
let computerSelection;

function getComputerChoice() {
	computerSelection = choices[Math.floor(Math.random() * 3)];
	return computerSelection;
}

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection) {
		resultText.innerHTML = `It's a tie! 👔 Both choose ${playerSelection}`;
	} else if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		score[0] += 1;
		resultText.innerHTML = `You win! 🥳 ${playerSelection[0].toUpperCase()}${playerSelection.slice(
			1
		)} beats ${computerSelection}`;
	} else if (
		(playerSelection === 'rock' && computerSelection === 'paper') ||
		(playerSelection === 'paper' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'rock')
	) {
		score[1] += 1;
		resultText.innerHTML = `You lose! 🥵 ${computerSelection[0].toUpperCase()}${computerSelection.slice(
			1
		)} beats ${playerSelection}`;
	} else {
		console.error('Oops! Something went wrong...');
	}
};

function updateDisplay() {
	scorePlayer.textContent = score[0];
	scoreComputer.textContent = score[1];

	if (!playerSelection) return;

	imgPlayer.src = `img/${playerSelection}.png`;
	imgPlayer.alt = `${playerSelection} icon`;
	imgComputer.src = `img/${computerSelection}.png`;
	imgComputer.alt = `${computerSelection} icon`;

	if (score[0] === 5) {
		modalText.textContent = 'You win! 👑';
		modal.classList.remove('hidden');
	}

	if (score[1] === 5) {
		modalText.textContent = 'You lose! 💩';
		modal.classList.remove('hidden');
	}
}

btnChoices.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		playerSelection = e.target.parentElement.dataset.choice;
		getComputerChoice();
		playRound(playerSelection, computerSelection);
		updateDisplay();
	});
});

btnReset.addEventListener('click', () => {
	modal.classList.add('hidden');
	modalText.textContent = '';
	playerSelection = computerSelection = '';
	score[0] = 0;
	score[1] = 0;
	resultText.textContent = 'Good luck!';
	imgPlayer.src = imgComputer.src = 'img/question-mark.png';
	updateDisplay();
});
