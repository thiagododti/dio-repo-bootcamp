// a palavra reservada this é uma referência de contexto.
// No exemplo a baixo, this refere-se ao objeto pessoa.
/*
const pessoa = {
    firstName: "André", // atributo
    lastName: "Soares", // atributo
    id: 1, // atributo
    fullName: function(){ // metodo
        return this.firstName + " " + this.lastName; // this refere-se ao proprio objeto pessoa que ele está
    },
    getId: function(){// metodo
        return this.id;
    }
};

pessoa.fullName();
// "André Soares"

pessoa.getId();
// 1
*/

//Seu valor pode mudar de acordo co mo lugar no código onde foi chamada

//em um objeto (método) -> Próprio objeto dono do método.
//sozinha               -> Objeto global (em navegadores, window)
//função                -> Objeto global
//evento                -> elemento que recebeu o evento

// MANIPULAR  THIS

// MÉTODO CALL
/*
const pessoa ={
    nome: 'Thiago',
};

const animal = {
    nome: 'Lola',
};

function pegueUmNome(){
    console.log(this.nome); // essa função vai pegar algum nome
}

pegueUmNome.call(pessoa); // o metodo call vai definir o objeto que vai ser definido para pegar o nome dele.
*/

// FUNÇÃO APPLY
/*
const pessoa ={
    nome: 'Thiago',
};

const animal = {
    nome: 'Lola',
};

function pegueUmNome(){
    console.log(this.nome); // essa função vai pegar algum nome
}

pegueUmNome.apply(pessoa);

*/

// CALL E APPLY COM ARGUMENTOS
/*
const myObj = {
    num1: 2,
    num2: 4,
}

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1 , 2); // CALL PASSAMOS OS ARGUMENTOS SEPARADOS POR VIRGULA.
soma.call(myObj, [1,5]); // APPLY PASSAMOS OS ARGUMENTOS DENTRO DE UM ARRAY.
*/

//BIND
// CLONA A ESTRUTURA DA FUNÇÃO ONDE É CHAMADA E APLICA O VALOR DO OBJETO PASSADO COMO PARAMETRO.

const retornaNomes = function(){return this.nome;};

let bruno = retornaNomes.bind({nome: 'Bruno'});

bruno();