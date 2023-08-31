function playRockPaperScissor(playerOne, playerTwo) {
  if (playerOne === playerTwo) {
    return "Empate!";
  }
  if (
    (playerOne === "Pedra" && playerTwo === "Tesoura") ||
    (playerOne === "Papel" && playerTwo === "Pedra") ||
    (playerOne === "Tesoura" && playerTwo === "Papel")
  ) {
    return "Jogador 1 venceu!";
  }
  {
    return "Jogador 2 venceu!";
  }
}
playRockPaperScissor();
