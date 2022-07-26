// THROW E RETURN

/*function verificaPalindromo(string){
    if (!string) return "String inválida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat'); 

retorno -> "String Inválida"
*/

/*function verificaPalindromo(string){
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat'); 

retorno -> Uncaught String Inválida

usando Throw como metodo de retorno, ele apresentará as caracteristicas do erro.
*/
//---------------------------------------------------------------------------------

// TRY E CATCH

//TRY vai executar um bloco de código e logo em seguida o catch vai capturar esse erro para ser manipulado da maneira que eu preferir
/*
function verificaPalindromo(string){
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try{
        verificaPalindromo(string);
    }
    catch(e){
        console.log(e);
    }
}

tryCatchExemplo('');

//retorno - String Inválida;*/

//----------------------------------------------------------------------------------

//FINALLY

//será um bloco de codigo logo apó o catch que será executado independente de ter sido detectado erro ou nao

/*
function verificaPalindromo(string){
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try{
        return verificaPalindromo(string);
    }
    catch(e){
        console.log(e);
    }
    finally{
        console.log('A string enviada foi: '+ string);
    }
}
*/

//--------------------------------------------------------------------------------------------------------

//MANIPULAR OBJECT ERROR

//new Error(message, fileName, lineNumber) <- todos os parametros são opicionais.
/*
const MeuErro = new Error('Mensagem Inválida');
throw MeuErro;
*/

//Nome no erro.

/*const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'InvalidMessage';

throw MeuErro;
retorno -> Uncaught InvalidMessage: Mensagem Inválida
*/

