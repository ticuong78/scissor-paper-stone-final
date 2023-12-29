const score = {
  wins: 0,
  loses: 0,
  ties: 0
}

const scoreBoardSelector = document.querySelector(".score-board");
const playsContainer = document.querySelector(".plays");

const computerChoice = () => {
  const ranNum = Math.random();
  if (ranNum <= 0.3) return "s"; //scissors
  else if (ranNum > 0.3 && ranNum <= 0.6) return "p"; //paper
  else if (ranNum > 0.6) return "S"; //Stone
}

const humanChoice = (playerChoice) => {
  if (playerChoice === "Scissors") return "s";
  else if (playerChoice === "Paper") return "p";
  else if (playerChoice === "Stone") return "S";
}

const playGame = (playerChoice) => {
  const computerPlay = computerChoice();
  const humanPlay = humanChoice(playerChoice);
  if (computerPlay === humanPlay) score.ties++;
  else if ((computerPlay === "s" && humanPlay === "p") || (computerPlay === "p" && humanPlay === "S") || (computerPlay === "S" && humanPlay === "s")) score.loses++;
  else score.wins++;

  playsContainer.innerHTML = `You: ${playerChoice} vs Computer: ${computerPlay === "s" ? "Scissors" : computerPlay === "p" ? "Paper" : "Stone"}`;
  scoreBoardSelector.innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties} `
}