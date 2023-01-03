//Declarações de variaves uma em baixo da outra
let a, b, c;
a = 5;
b = 10;
c = 8;

//Declarações de variaves uma do lado da outra
let d, e, f; d = 2; e = 3; f = 4;

/*Ambas as formas de declarar variaves, são possiveis */


        /*JavaScript ignora espaços*/ 
        /*Porém, utilizar espaços, fará com que o código tenha uma melhor compeenção */

// então, escrever o código sim espaço:
let pessoa="Dimitri";        
// é o mesmo que escrever sem. Porém, com um melhor visual e compreenção:
let pessoa = "Dimitri" ;

        /*!!! Alerta !!!*/
// Um erro ocorrera, pois a variavel "pessoal", está se repetindo 




        /* O JS, aceita quebra de linhas e nao ira afetar no Browser(Navegador) */

        /*Porém, optar por não usar a quebra de linha,fara com que o código tenha uma melhor compeenção */

// Sem a quebra de linha
document.getElementById("texto").innerHTML="Meu primeiro texto <b>JavaScript</b>!";
// Com a quebra de linha
document
    .getElementById("texto").innerHTML=
    "Meu primeiro texto <b>JavaScript</b>!";

//bloco de comando
function minhafuncao(){
    document.write(5 + 5);
    document.write(5 + 5);
    document.write(5 + 5);
    document.write(5 + 5);
    document.write(5 + 5);
}
   
