/*
// sintaxe sem parametro

function funcao(){
    console.log('Função funcionando');
}

funcao();

// sintaxe com parametro
function somar(a, b){
    console.log(a+b);
}

somar(1,2);

*/

// expressão de função
// com nomeação

var funcao = function funcao() {
    console.log('Sou uma mensagem de função de expressão!');
}

// sem nomeação

var funcao2 = function () {
    console.log('Sou uma mensagem de função de expressão sem nomeação')
}

funcao();
funcao2();

// arrow function
// são expressoes de sintaxe curta, e serão sempre anonimas.

//sintaxe
var funcao = () => {
    console.log('Resultado de uma arrow function');
}
// a chamada dela se dá pelo nome da variavel que foi atribuida mais ();
funcao();

//funcoes aritmeticas

// Number() - converte valores em numeros.
// Prompt() - para registrar as entradas de usuário.
// Alert() - para mostrar mensagem ao usuário.
// Template Strings - para usar strings junto com expressões.

// função auto invocável IIFE
//sintaxe
/*  (function () {
    let name = "Thiago"
    return name;
})(); */

//com parametros
/* (function (a, b) {
    return a + b;
}
)(1, 2) */

//armazenando resultado em uma variavel 
/* const soma3 =(
    function(a,b){
        return a + b;
    }
)(1,2);
console.log(soma3);*/

// callback - função passada como argumento
/*
const calculadora = function(operacao, n1, n2){
    return operacao(n1,n2);
}
const soma = function(n1,n2){
    return n1 + n2;
}
const resultSoma = calc(soma,1,2);

console.log(resultSoma);    */