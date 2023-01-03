/*      EVENTOS

Eventos são ações disparadadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas insterativas e dinâmincas 

Existem muitos eventos. Vaje os mais utilizados:

onclick -> Disparado quando recebe um click.
ondblclick -> Disparado quando o click é duplo.
onmouseover -> Disparado quando o mouse está sobre.
onmouseout -> Disparado quando mouse é movido para fora do elemento.
onmousemove -> Disparado quando o mouse é movido no elemento
onmousedown -> Disparado quando o click do botão foi pressionado.
onmouseup -> Disparado quando o click do botão for liberado.
onfocus -> Disparado quando o elemento recebe foco. Válido para input
onchange -> Disparado quando quando existe uma mudança no conteúdo. "Ao mudar".
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado qundo uma tecla é precionada.
onkeypress -> Disparado qundo uma tecla é precionada e solta.
onkeyup -> Disparado quando uma tecla é solta solbre um elemento.
onload -> Disparado quando a páina terminou de ser carregada. Body.
onresize -> Disparado quando há um redicionamento da janela.

*/



// Evento de click que muda cor de fundo pra vermelho ao ser clicado no botão
function eventoClick(){
    alert('Acionou um evento de click')
    document.body.style.backgroundColor = "red";
}

/* Evento de 2 click, que muda cor de fundo para verde ao ser 
   clicado dua vezes no   botão */
function eventoDblClick(){
    alert('Acionou um evento de click duplo')
    document.body.style.backgroundColor = "green";
}

// Evento que, ao deixar o mouse em cima de algum conteúdo, fará algo 
// Neste caso está mudando da cor azul para roxo
function viraRoxo(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "purple";
}

// Evento que, ao remover o mouse de cima de algum conteúdo, fará algo 
/* Neste caso está voltando para cor azul. Porm a função dela não 
   é resturna ao valor anterior mais sim, substituir */
function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

// Evento que, ao mover o mouse de cima de algum conteúdo, fará algo 
/* Neste caso está escrevendo na tela "Atualize a página para voltar 
   ao normal" toda vez que é movido o mouse dentro do conteúdo */
function adcionarTexto(){
    let p = document.getElementById("texto");
    p.append('Atualize a página para voltar ao normal--------------------------------- '); 
/* append é um comando para adicinar algo, como por exempo
   o texto acima, " Atualize a página para voltar ao normal--------------------------------- "
*/
}

// Evento que, dara foco ao ser clicado 
/* Nesta função, assim que clicado no campo de texto, o conteúdo dara foco 
   e irá sumir o contúdo já exitente nele*/
function limpaTexto(){
    document.getElementById("campoTexto").value = "";
    
}

// Evento que fará a mudança de algum contúdo
function mudou(){
    console.log('Mudou')
}


    /*Esses conteúdos através do comando do teclado poderam ser vistos apenar atraves do "Inspecionar do Browser" */

// Evento mostrara conteúdo precionado pela tacla, com uma tecla de atraso
function teclaPressionada(){
    let input = document.getElementById("compoTexto3").velue;
    console.log(input);

}


 