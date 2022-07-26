let N = Number(prompt('Insira o primeiro valor: '));
let jogador1, jogador2;
for (let i = 0; i < N; i++) {
    jogador1 = prompt('Insira o primeiro jogador: ');
    jogador2 = prompt('Insira o segundo jogador: ');
    		
//TODO: Complete os espaços em branco com uma possível solução para o desafio

    switch(jogador1.toUpperCase()){
      case "ATAQUE":
        if(jogador2.toUpperCase() === "ATAQUE"){
          alert("Aniquilacao mutua");
        }else if(jogador2.toUpperCase() === "PEDRA"){
            alert("Jogador 1 venceu");
        }else if(jogador2.toUpperCase() === "PAPEL"){
            alert("Jogador 1 venceu");
        }
      break
      case "PEDRA":
        if(jogador2.toUpperCase() === "ATAQUE"){
            alert("Jogador 2 venceu");
        }else if(jogador2.toUpperCase() === "PEDRA"){
            alert("Sem ganhador");
        }else if(jogador2.toUpperCase() === "PAPEL"){
            alert("Jogador 1 venceu");
        }
      break
      case "PAPEL":
        if(jogador2.toUpperCase() === "ATAQUE"){
            alert("Jogador 2 venceu");
        }else if(jogador2.toUpperCase() === "PEDRA"){
            alert("Jogador 2 venceu");
        }else if(jogador2.toUpperCase() === "PAPEL"){
            alert("Ambos venceram");
        }
      break
    }
}