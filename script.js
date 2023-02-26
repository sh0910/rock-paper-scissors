'use strict';

const choices = ['rock', 'paper', 'scissors'];
const score = [0, 0]; // [player, computer]

let playerSelection;
let computerSelection;

const getPlayerChoice = () => {
	const choice = prompt('Rock, paper, or scissors?').toLowerCase();
	if (!choices.includes(choice)) return getPlayerChoice();
	playerSelection = choice;
};

const getComputerChoice = function () {
	return choices[Math.floor(Math.random() * 3)];
};

const playRound = function (playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return `➖ It's a tie! Player and computer both choose ${playerSelection}.`;
	} else if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		score[0] += 1;
		return `🥳 You win! ${computerSelection} beats ${playerSelection}`;
	} else if (
		(playerSelection === 'rock' && computerSelection === 'paper') ||
		(playerSelection === 'paper' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'rock')
	) {
		score[1] += 1;
		return `🥵 You lose! ${computerSelection} beats ${playerSelection}.`;
	} else return `Oops! Something went wrong.`;
};

const game = function (rounds) {
	for (let i = 1; i <= rounds; i++) {
		getPlayerChoice();
		computerSelection = getComputerChoice();
		console.log(
			`Round ${i}: You choose ${playerSelection}. Computer chooses ${computerSelection}.`
		);
		console.log(playRound(playerSelection, computerSelection));
	}
	console.log(
		`PLAYER: ${score[0]}, COMPUTER: ${score[1]} ${
			score[0] === score[1]
				? 'Wow a tie!'
				: score[0] > score[1]
				? 'You win!!'
				: 'You lose... Better luck next time...'
		}`
	);
};

game(4);
