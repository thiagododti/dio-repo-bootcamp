/* var jogador1 = 0;
var jogador2 = 0;
var placar;

//condicionais.

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores Inválidos');

// usando if
if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
}
// usando else if
else if (jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
}
// usando else
else {
    console.log('Nínguem marcou ponto');
}
// usando switch
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
        break;
    default:
        console.log('Ninguém ganhou');
        break;
}
*/
// repetiçoes

let array = ['valor1', 'valor2' , 'valor3' , 'valor4' , 'valor5'];
let object = {propriedade1:'valor1', propriedade2:'valor2', propriedade3:'valor3'};

// usando for - executa uma instrução até que ela seja falsa

for (let indice = 0; indice < array.length; indice++){
    console.log(indice)
}

// usando for/in executa repetição a partir de uma propriedade

for (let i in array){
    console.log(i);
}

for (i in object){
    console.log(i);
}

// usando for/of executa uma repetição a partir de valor

for (i of array){
    console.log(i);
}

// for of com object
for (i of object.propriedade1){
    console.log(i);
}

// while

var a = 0;

/*while(a < 10){
    a++;
    console.log(a);
}*/

// do while 

do {
    a++;
    console.log(a);
}while(a < 10);