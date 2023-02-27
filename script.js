'use strict';

const btnRock = document.querySelector('.btn__rock');
const btnPaper = document.querySelector('.btn__paper');
const btnScissors = document.querySelector('.btn__scissors');
const choiceResultContainer = document.querySelector('.choice__result');
const scorePlayer = document.querySelector('.score__player');
const scoreComputer = document.querySelector('.score__computer');
const result = document.querySelector('.result');
const choicePlayer = document.querySelector('.choice__player');
const choiceComputer = document.querySelector('.choice__computer');
const round = document.querySelector('.round');

const choices = ['rock', 'paper', 'scissors'];
const score = [0, 0]; // [player, computer]
let gameRound = 0;

let playerSelection;
let computerSelection;

/* 
// Get player choice via prompt
const getPlayerChoice = () => {
	const choice = prompt('Rock, paper, or scissors?').toLowerCase();
	if (!choices.includes(choice)) return getPlayerChoice();
	playerSelection = choice;
};
 */

const getComputerChoice = function () {
	return choices[Math.floor(Math.random() * 3)];
};

const playRound = function (playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		result.innerHTML = `It's a tie! Both choose ${playerSelection}`;
	} else if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		score[0] += 1;
		scorePlayer.textContent = score[0];
		result.innerHTML = `🥳 You win! ${playerSelection} beats ${computerSelection}`;
	} else if (
		(playerSelection === 'rock' && computerSelection === 'paper') ||
		(playerSelection === 'paper' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'rock')
	) {
		score[1] += 1;
		scoreComputer.textContent = score[1];
		result.innerHTML = `🥵 You lose! ${computerSelection} beats ${playerSelection}`;
	} else {
		console.log('Oops... something went wrong....');
	}
};

const game = function () {
	playRound(playerSelection, computerSelection);

	// todo make popup  'you win!' and link to play again
	if (score[0] === 5) {
		document.body.style.backgroundColor = 'green';
	}

	if (score[1] === 5) {
		document.body.style.backgroundColor = 'red';
	}
};

btnRock.addEventListener('click', function () {
	playerSelection = 'rock';
	choicePlayer.textContent = playerSelection;

	computerSelection = getComputerChoice();
	choiceComputer.textContent = computerSelection;

	game();

	gameRound++;
	round.textContent = gameRound;
});

/* btnPaper.addEventListener('click', function () {
	playerSelection = 'paper';
	console.log(playerSelection);

	choiceResultContainer.insertAdjacentText(
		'afterbegin',
		`You choose ${playerSelection}.`
	);
});

btnScissors.addEventListener('click', function () {
	playerSelection = 'scissors';
	console.log(playerSelection);
	choiceResultContainer.textContent = '';
	choiceResultContainer.insertAdjacentText(
		'afterbegin',
		`You choose ${playerSelection}.`
	);
});
 */
