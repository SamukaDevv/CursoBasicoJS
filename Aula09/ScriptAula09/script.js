
/*   OBJETOS

Objetos são básicamente variáeis com muitos valores detro.

Ex: const carro = {marca:"ford", modelo:"ka", ano: 2015}

Os valores dentro de objeto são chamados propriedades.

Objetos também podem ter métodos. Um Método é uma função colocada dentro de uma propriedade .

*/


const carro = { //Variavel com nome de carro em seguida seus valores
    marca: "ford", 
    modelo:"ka", 
    ano:2015, 
    placa:"ABC-1234",
    buzina: function(){alert('B i i i i i ')},   // Método / Função: propriedade que
    completo: function(){                        // contém uma função 
        return " A marca é " +this.marca+ " e o medelo é: "+this.modelo 
    } 
};
console.log(carro.ano);                     //Fazendo a chamda do "atributo"

carro.buzina();                             //Fazendo a chamda do "método"

console.log(carro.completo());  