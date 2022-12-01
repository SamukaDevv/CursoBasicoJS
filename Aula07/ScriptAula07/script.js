/* Entendendo os operadores:

-> Os operador JavaScript são usados para atribuir valores, comparar 
valores, executar operações aritiméticas e muito mais.

Os sinais utilizados são: " +, -, *, /, =, ++, --, +=, -=, &&, ||, etc... "

São separados em 6 "categorias":

1) Operadores Aritiméticos (matemáticos)
2) Operadores de Atribuição
3) Operadores de Sequência
4) Operadores de Comparação
5) Operador Condicional (Ternário)
6) Operadores Lógicos

*/


//1) Operadores Aritiméticos (matemáticos)
// Operador de Somar
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = valor1 + valor2;
alert(" 5 + 2 = " + total);


// Operador de Subtração
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = valor1 - valor2;
alert(" 5 - 2 = " + total);


// Operador de multiplicaçao
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = valor1 * valor2;
alert(" 5 * 2 = " + total);


// Operador de divisão
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = valor1 / valor2;
alert(" 5 / 2 = " + total);


// Operador de incremento
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = ++valor1;
alert("5 + 1 = " + total);


// Operador de decrmento
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = --valor1;
alert("5 - 1 = " + total);

/*------------------------- Finalizndo 1 ----------------------------- */


//2) Operadores de Atribuição
//  O operador de atribução faz de novos valores!
/*Ex 1:
    abaixo temos o comando "VAR" recebendo (atribuições/"valores")
    valor1 recebe a atribuição 5 ( valor1 = 5) e valor2 recebe a atribuição 2 ( valor2 = 2)
*/
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

/*Ex 2:
    valor1 recebe valor1 + valor2
    resultado final, resultara em 7 
*/
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

valor1 = valor + valor2;


/*Ex 3:
    valor1 recebe valor1 + valor2 
    que também, pode ser representado com "valor1 += valor2"
    resultado final, resultara em 7 
*/
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

valor1 += valor2;


// O mesmo exemplo acima pode ser atribuido a subtração

/*Ex 1:
    abaixo temos o comando "VAR" recebendo (atribuições/"valores")
    valor1 recebe a atribuição 5 ( valor1 = 5) e valor2 recebe a atribuição 2 ( valor2 = 2)
*/
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

/*Ex 2:
    valor1 recebe valor1 - valor2
    resultado final, resultara em 3 
*/
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

valor1 = valor - valor2;


/*Ex 3:
    valor1 recebe valor1 - valor2 
    que também, pode ser representado com "valor1 -= valor2"
    resultado final, resultara em 3 
*/
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

valor1 -= valor2;

/* Com esse exemplos de "ATRIBUIÇÃO" citados acima, poderá ser 
   utilizados a todos os outros operadores aritimeticos */


/*------------------------- Finalizndo 2 ----------------------------- */


//3) Operadores de Sequência
// CONCATENAÇÃO 
// no caso de (Strings/"textos"), a atribuição faz uma junção de valores 
/*Ex: 
    A variavel "valor1", ira receber o valor "Renato". E a variavel "valor2", ira receber o valor "Oliveira"
    Fazendo a junção desses valores, obteremos como resultado, o valor "Renato Oliveira"
*/
var valor01, valor02, result;
valor01 = "Samuel ";
valor02 = "Gomes";

result = valor01 + valor02;
alert("Nome completo é : " + result);



/*------------------------- Finalizndo 3 ----------------------------- */




//4) Operadores de Comparação
// Os operadores de comparação, sempre retornam os valores " VERDADEIRO " ou " FALSO "

    
    /* Diferença entre "=, ==, ===, !=" */
/*
    *Quando utilizamos o operador "=", quando estamos fazendo uma atribuição ha uma váriavel
*/


/*
    *Quando utilizamos o operador "==", quando estamos fazendo comparações de valor da variavel, que nos dira se o "VALOR" da variavel é "IGUAL" ao outro "VALOR"
*/
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = (valor1 == valor2);
alert("5 é igual a 2? " + " R:" + total);


/*
    *Quando utilizamos o operador "===", quando estamos fazendo comparações de valor da variavel, que nos dira se o "VALOR" e o "TIPO" da variavel é "IDENTICO" ao outro "VALOR";
*/
var valor1, valor2, total;
valor1 = 5;
valor2 = "5";

total = (valor1 === valor2);
alert("5 é identico a 2? " + " R:" + total); //resultara em falso pois, os "tipos" sao diferentes


/*
    *Quando utilizamos o operador "!=", quando queremos fazer uma diferença no "VALOR" 
     da variavel
     Ex: 5 (!= / diferente) 2, resultando true. Sabendo que 5 nao é igual a 2, o resultado é verdadeiro
*/
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = (valor1 != valor2);
alert("5 é diferente de 2 " + " R:" + total); //resultara em verdadeiro pois, 5 é diferente de 2


/*
    *Quando utilizamos o operador "!==", quando queremos fazer uma diferença no "VALOR" e
     "TIPO" da variavel
*/   
var valor1, valor2, total;
valor1 = 5;
valor2 = "5";

total = (valor1 !== valor2);
alert("5 e diferente de '5' " + " R:" + total); //resultara em verdaddeiro pois, os tipos so diferentes



    /* Diferença entre " <, >, <=, >=,  */
/*
    *Quando utilizamos o operador "<", quando queremos dizer que um valor é menor do que o outro
    Ex: 2 < 3 = true. 2 menor que 3, resultando em verdadeiro pois, 2 menor que 3
*/  
var valor1, valor2, total;
valor1 = 2;
valor2 = 3;

total = (valor1 < valor2);
alert("2 é menor que 3? " + " R:" + total); 


/*
    *Quando utilizamos o operador ">", quando queremos dizer que um valor é maior do que o outro
    Ex: 2 > 3 = false. 2 maior que 3, resultando em falso pois, 2 é menor que 3
*/  
var valor1, valor2, total;
valor1 = 2;
valor2 = 3;

total = (valor1 > valor2);
alert("2 é maior que 3? " + " R:" + total); 


/*
    *Quando utilizamos o operador "<=", quando queremos dizer que um valor é menor ou igual ao outro
    Ex: 2 <= 2 = true. 2 menor ou igual ao 2, resultando em verdadeiro pois, 2 é igual a 2
*/  
var valor1, valor2, total;
valor1 = 2;
valor2 = 2;

total = (valor1 < valor2);
alert("2 é menor ou igual a 2? " + " R:" + total); 


/*
    *Quando utilizamos o operador ">=", quando queremos dizer que um valor é maior ou igual ao outro
    Ex: 10 >= 2 = true. 10 mior ou igual ao 2, resultando em verdadeiro pois, 10 é maior que 2
*/  
var valor1, valor2, total;
valor1 = 2;
valor2 = 2;

total = (valor1 < valor2);
alert("2 é menor ou igual a 2? " + " R:" + total); 


/*------------------------- Finalizndo 4 ----------------------------- */




//5) Operador Condicional (Ternário)
// É uma condição que poder ser atribuida a uma váriavel no momento em for declarar ela
var idade, eleitor, resultado;
idade = 18;
eleitor = (idade < 18) ? "não pode votar" : "pode votar";

alert("Samuel tem " + idade + ", então ele " + eleitor); 

/* Simbolo de condições " &&, ||, ! " */

// Usamos o simbolo "&&", para dizer que ambos valores tem que ser verdadeiro 
// pra resultar em "TRUE"
var idade, eleitor, resultado;
idade = 65;
eleitor = (idade < 18) ? "não pode votar" : "pode votar";

resultado = (idade > 60 && idade < 70);    // 60 menor que "E" 70 menor que
alert(resultado)


// Usamos o simbolo "||", para dizer um ou outro valor tem que ser verdadeiro 
// pra resultar em "TRUE"
var idade, eleitor, resultado;
idade = 72;
eleitor = (idade < 18) ? "não pode votar" : "pode votar";

resultado = (idade === 65 || idade === 72);   // 65 identico a "OU" 72 identico a
alert(resultado)


// Usamos o simbolo "!", para negar algo
var idade, eleitor, resultado;
idade = 71;
eleitor = (idade < 18) ? "não pode votar" : "pode votar";

resultado = !(idade === 65 || idade === 72);   // "NÃO" idade igual a 65 (não é igual a 65)
alert(resultado)