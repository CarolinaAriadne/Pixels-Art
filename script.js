
let selecionandoCoresPaletas = document.getElementById('color-palette') //selecionando paleta

function corSelecionada(event) { //Quando passo o event como parâmetro na função, eu estou passando o evento do clique como parâmetro,  referente ao quadrado clicado.

    let guardando = event.target; ////meu elemento div (target) que está recebendo o event click 

    let selecionandoElementoComSelected = document.querySelector('.selected'); // selecionando elemento que possui a classe

    selecionandoElementoComSelected.classList.remove('selected');

    guardando.classList.add('selected'); //elemento clicado(div), adicionando classe selected nela

}

function adicionandoClickPaleta() { // adicionando evento de click paleta

    for (let index1 = 0; index1 < selecionandoCoresPaletas.children.length; index1 += 1) { //pegando tamanho dos filhos da div color palette

        selecionandoCoresPaletas.children[index1].addEventListener('click', corSelecionada); ////cada div da paleta,  em sua posição,recebe o evento de click (ouvidor)

    }
}
adicionandoClickPaleta();



//A classe selected deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

//A classe selected deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

//Somente uma das cores da paleta deve ter a classe selected de cada vez;

//Note que os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color, como especificado no requisito 2.





