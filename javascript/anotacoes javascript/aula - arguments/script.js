//valores padroes
//quando o usuario nao passou ou nao quis passar algum valor como argumento

/*
function exponencial(array, num = 1){ //presume-se que quando o usuario nao vai passar uma informação o valor será 1
    const result = [];

    for(let i = 0; i < array.lenght; i++){
        result.push(array[i] ** num);
    }

    return result;
}

exponencial([1,2,3,4]);
//[1,2,3,4]
exponencial([1,2,3,4],4)
//[1,8,27,64]
*/

//valores padrões antes do ECMAScript2015

/*
function exponencial(array,num){
    if (num === undefined){ // verificava se o valor era undefined para então dar o valor 1 como padrão.
        num = 1
    }
}*/

//objeto ARGUMENTS
// é um array com todos os parâmetros passados quando a função foi invocada

/*
function findMax(){
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++){
        if( arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

findMax(1,2,3,6,90,1);
// 90
*/