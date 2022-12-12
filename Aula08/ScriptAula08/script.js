
/*  FUNÇÕES
Uma função JavaScript  é um bloco de códigos projetados para executar um
tarfa específica.

É como uma pequena "fabrica" onde você faz uma entrada e ele ta dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que 
vai contribuir para todo código.

Uma função JavaScript é executada quando "algo" a invoca (chama-a).
*/




//A função recebe um nome chamado de "soma",  nessa função íra receber "paremetros/valores de entrada", que fivaram dentro do simbolo de parênteses simbolizado, como   "( )"
//FUNÇÃo DE SOMA
function soma(var1 , var2){
    return var1 + var2;   
}
//fazano a cahada da funções atraves do Id texto que está na tag <p> do HTML
document.getElementById("texto").innerHTML = soma(10,40);

/*   OU   */

//nesse bloco de código íra executar a mesma função de cima porém, dando a saída dos dados como alerta
function soma(var1 , var2){
    return var1 + var2;   
}

var total = soma(10, 40);

alert(total);



//FUNCÃO DE COTAÇÃO dDO DOLAR
function realParaDolar (real, cotacaoDolar){
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal, cotacao);

alert("O valor em real é R$: " + valorReal + " o valor em dólar é U$: " + total);



//Fazendo chamada da funçãom do "alertHome" atraves da tag <button> no HTML
function alertaHome(){
    alert("Helo, Word!");
}


//Atribuido funções de valores há uma váriavel
function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32);
}
 var x = paraCelsius(77);

 alert("A temperatura é de " +x+ " graus celsius");
