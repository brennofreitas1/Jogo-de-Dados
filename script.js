const Buttom = document.getElementById('teclar');
const chamar = document.getElementById('chamar');
const Buttom2 = document.getElementById('teclar2');
const chamar2 = document.getElementById('chamar2');
let jogadorAtual = 1;
let resultadoJogador1 = 0;
let resultadoJogador2 = 0;
let vitoriasJogador1 = 0;
let vitoriasJogador2 = 0;
let rodadaAtual = 1;

const btRodarDado = () => {
  if (jogadorAtual === 1){
    const dado = Math.floor(Math.random() * 6) +1;
    chamar.innerHTML= dado
    resultadoJogador1 += dado;
    jogadorAtual = 2;
    Buttom.disabled = true; 
    Buttom2.disabled = false;
  } else {
    const dado2 = Math.floor(Math.random() * 6) +1;
    chamar2.innerHTML= dado2
    resultadoJogador2 += dado2;
    jogadorAtual = 1;
    Buttom2.disabled = true; 
    Buttom.disabled = false;
  }
  
  if (resultadoJogador1 > 0 && resultadoJogador2 > 0 && (resultadoJogador1 !== resultadoJogador2)) {
    if (resultadoJogador1 > resultadoJogador2) {
      alert("O jogador 1 ganhou a rodada atual!");
    } else {
      alert("O jogador 2 ganhou a rodada atual!");
    }
    resultadoJogador1 = 0;
    resultadoJogador2 = 0;
    rodadaAtual++;
  } else if (resultadoJogador1 > 0 && resultadoJogador2 > 0) {
    alert("Empate na rodada atual!");
    resultadoJogador1 = 0;
    resultadoJogador2 = 0;
    rodadaAtual++;
  }
  
  if (rodadaAtual > 10) {
    if (vitoriasJogador1 > vitoriasJogador2) {
      alert("O jogador 1 venceu a partida!" <br> + vitoriasJogador1 + " vitórias!");
    } else if (vitoriasJogador2 > vitoriasJogador1) {
      alert("O jogador 2 venceu a partida!" <br> + vitoriasJogador2 + " vitórias!");
    } else {
      alert("A partida terminou empatada!");
    }
    rodadaAtual = 1;
    vitoriasJogador1 = 0;
    vitoriasJogador2 = 0;
  }
};
  Buttom.addEventListener('click', btRodarDado);
  Buttom2.addEventListener('click', btRodarDado);