function playerPlay() {
  let playerChoice = prompt("Introduce tu opción: Piedra, Papel o Tijeras");
  playerChoice = playerChoice.toLowerCase();

  if (
    playerChoice === "piedra" ||
    playerChoice === "papel" ||
    playerChoice === "tijeras"
  ) {
    return playerChoice;
  } else {
    alert("Introduce un valor valido (Piedra, Papel o Tijeras)");
  }
}

function computerPlay() {
  const play_options = ["piedra", "papel", "tijeras"];

  let random_num = Math.floor(Math.random() * play_options.length);

  return play_options[random_num];
}

function playRound(playerSelection, computerSelection) {
  let roundResult;

  switch (playerSelection) {
    case "piedra":
      if (computerSelection === "tijeras") {
        roundResult = "Has ganado";
      } else if (computerSelection === "papel") {
        roundResult = "Has perdido";
      } else if (computerSelection === "piedra") {
        roundResult = "Empate";
      }
      break;

    case "papel":
      if (computerSelection === "piedra") {
        roundResult = "Has ganado";
      } else if (computerSelection === "tijeras") {
        roundResult = "Has perdido";
      } else if (computerSelection === "papel") {
        roundResult = "Empate";
      }
      break;

    case "tijeras":
      if (computerSelection === "papel") {
        roundResult = "Has ganado";
      } else if (computerSelection === "piedra") {
        roundResult = "Has perdido";
      } else if (computerSelection === "tijeras") {
        roundResult = "Empate";
      }
      break;

    default:
      roundResult = "Ha habido un error";
  }

  return roundResult;
}

// CÓDIGO PARA JUGAR A 5 RONDAS
let computerScore = 0;
let playerScore = 0;

for (let i = 0; i < 5; i++) {
  let playerSelection;
  let result;

  while (!!result === false || result === "Empate") {
    playerSelection = false;

    while (!!playerSelection === false) {
      playerSelection = playerPlay();
    }

    let computerSelection = computerPlay();
    alert("La cpu elige " + computerSelection);
    result = playRound(playerSelection, computerSelection);
    alert(result);

    if (result === "Has ganado") {
      ++playerScore;
    } else if (result === "Has perdido") {
      ++computerScore;
    }
  }
  alert(
    "Resultado Ronda " +
      (i + 1) +
      "   " +
      "Tú: " +
      playerScore +
      "   " +
      "CPU: " +
      computerScore
  );
  if (playerScore === 3 || computerScore === 3) {
    break;
  }
}

// CÓDIGO PARA JUGAR UNA RONDA:

// let computerSelection = computerPlay();
// let playerSelection = playerPlay();

// if (!!playerSelection === true){
//   alert("La cpu elige " + computerSelection);
//   alert(playRound(playerSelection, computerSelection));
// }
