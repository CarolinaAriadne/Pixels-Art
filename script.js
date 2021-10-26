
let selecionandoCoresPaletas = document.getElementsByClassName('color') //selecionando paletas

function adicionandoClickPaleta() { // adicionando evento de click nas divs paleta

    for (let index1 = 0; index1 < selecionandoCoresPaletas.length; index1 += 1) { ////cada div da paleta,  em sua posição,recebe o evento de click (ouvidor), após, função que dita o que ocorre pós click (seleção de cor para poder ser usada nos pixels)

        selecionandoCoresPaletas[index1].addEventListener('click', corSelecionada)

    }

}


function corSelecionada(event) { //cliquei no quadrado. Quando passo o event como parâmetro na função, eu estou passando o evento do clique como parâmetro,  referente ao quadrado clicado.

    let guardando = event.target; ////meu elemento div (target) que está recebendo o event click neste momento(ouvindo o click que ocorreu na página), está sendo guardado na variável passada

    selecionandoCoresPaletas.document.getElementsByClassName('selected'); // selecionando elemento que possui a classe
    selecionandoCoresPaletas.remove('selected'); //removendo a classe do elemento

    guardando.className = 'selected'; //adicionando a classe ao elemento que recebeu o evento de click


}









