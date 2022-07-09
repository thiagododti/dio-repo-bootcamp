// o que são vetores ou arrays

// como declarar um array

/*let array = ['string', 1 , true];
console.log(array); */

// pode guardar vários tipos de dados;

let array = ['string', 1, true, ['array1'], ['array 2'], ['array3']];
console.log(array[1]);

/* metodos de manipulação de array

forEach() - itera um array
push() - add item no final do array
pop() - remove item no final do array
shift() - remove item no inicio do array
unshift() - add item no inicio do array
indexOf() - retorna o indice de um valor
splice() - remove ou substitui um item pelo indice
slice() - retorna uma parte de um array existente

*/

// forEach

/*array.forEach(function(item, index){console.log(item, index)});

// push

array.push('novo item');
console.log(array);*/

//Objetos

//como declarar

var xicara = {
    cor: 'azul',
    tamanho: 'p',
}
// desestruturação
var cor = xicara.cor;

var {cor, tamanho } = xicara;

console.log(cor,tamanho);