    /*  Entendendo as variáveis*/

/* 
    As Variáveis são "recipientes" onde podemos armazenarinformações que
    podem variar, ou seja, podem ter qualquer tipo de valor.
*/ 

/*
    No javaScript temos 3 palavras-chaves para declarar variáveis:
    -> var
    -> let
    -> const
*/

// chamada da variavel pote
/*
    var pote = "bombom";
    alert(pote);
*/


        /* Utilizando a palavra reservada "VAR", poderar alter a variavel sempre que possivel */

// Declaração de Variáveis       //Numeros
var a, b, c;

//Atribuição dos Valores
a = 2;
b = 3;
c = a + b;

alert(c);

// Declaração de Variáveis       //Numeros
var nome, sobrenome, nomeCompleto;

//Atribuição dos Valores
nome = "Samuel";
sobrenome = "Gomes";
nomeCompleto = nome + " " + sobrenome;

document.getElementById("texto").innerHTML = nomeCompleto;


        /* Utilizando a palavra reservada "LET", a variável não podera sedeclarada, tornandoa unica  */

//let pessoa = "Dimitri"
//let pessoa = " João"

    /* Ocorrera um erro, pois o valor da variavel "pessoa", está se repetindo. Visto no cementario acima, a variavel "LET", não permite redeclarações de variáveis. Mas isso não e constante, pois a variável "LET", poder funcionar a auteração em um bloco de codigo declarado*/

//valoe sempre sera 10
let x = 10; //aqui é 10
{
    // apenas nesse bloco de código que sera valor 2
    let x = 2; //aqui é 2
}

    



    /* Utilizando a palavra reservada "CONST", É uma variável constnte, ou seja,
       em hípotese alguma ela podera ser alterada   */

//O valor sempre sera 10 idependente das mudanças feitas no codigo abaixo dele
const a = 10; //aqui é 10
{
    // apenas nesse bloco de código que sera valor 2
    const a = 2; //aqui continuara sendo 10
}

        