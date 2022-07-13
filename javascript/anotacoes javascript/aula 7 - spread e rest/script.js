// spread: é a forma de lidar separadamente com elementos
// o que era parte de um array se torna um elemento independente.
/*
Sintaxe de Espalhamento (Spread syntax) permite que um objeto iterável,
como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais
 argumentos (para chamadas de funções) ou elementos (para arrays literais) são esperados,
ou que um objeto seja expandido onde zero ou mais pares propriedade:valor (para objetos literais) são esperados.
*/

/*
function sum(x,y,z){
    return x + y + z;
}

const numbers = [1,2,3];

console.log(sum(...numbers)); */

//----------------------------------------------------------

//rest: combina os argumentos em um array
//o que era um elemento independente se torna parte de um array

/*
function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho();
confereTamanho(1,2);
confereTamanho(3,4,5);  */

//----------------------------------------------------------

//object destructuring

// Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName:{
        firstName: 'John',
        lastname: 'Doe'
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName:{firstName: first, lastName: last}}){
    return `$(first) $(last)`;
}

userId(user);
getFullName(user);
