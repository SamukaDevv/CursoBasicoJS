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

/*--------------------------------------------------------------*/


//2) Operadores de Atribuição
//  !O operador de atribução faz de novos valores!
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

 


/*---------------------------------------------------------------*/


//3) Operadores de Sequência
// CONCATENAÇÃO 
// no caso de (Strings/"textos"), a atribuição faz uma junção de valores 
/*Ex: 
    A variavel "valor1", ira receber o valor "Renato". E a variavel "valor2", ira receber o valor "Oliveira"
    Fazendo a junção desses valores, obteremos como resultado o valor "Renato Oliveira"
*/
var valor1, valor2, total;
valor1 = "Renato ";
valor2 = "Oliveira";

total = valor1 + valor2;
alert(total);
