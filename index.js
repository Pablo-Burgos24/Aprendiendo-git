let playerSelection = prompt("Ingrese su movimiento").toLowerCase();
let computerSelection = ["rock", "paper", "sicissors"];
computerSelection = computerSelection[Math.floor(Math.random() * 3)];

function playRound(playerSelection, computerSelection) {
  if (computerSelection == playerSelection) {
    return alert(`EMPATARON! | Jugador: ${playerSelection} / Maquina: ${computerSelection}`);
  } else if (
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "rock" && playerSelection == "sicissors") ||
    (computerSelection == "sicissors" && playerSelection == "paper")
  ) {
    return alert(`Gano la maquina | Jugador: ${playerSelection} / Maquina: ${computerSelection}`);
  } else {
    return alert(`Gano el jugador | Jugador: ${playerSelection} / Maquina: ${computerSelection}`);
  }
}
playRound(playerSelection, computerSelection);
