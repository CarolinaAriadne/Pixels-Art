// requisito 7

let quadradoDaPaletaSelecionado = null; // sem valor

let selecionandoCoresPaletas = document.getElementById('color-palette'); // selecionando paleta

function corSelecionada(event) {
  // Quando passo o event como parâmetro na função, eu estou passando o evento do clique como parâmetro,  referente ao quadrado clicado.

  let guardando = event.target; // meu elemento div (target) que está recebendo o event click

  quadradoDaPaletaSelecionado = event.target; //variável que recebe o quadrado clicado

  let selecionandoElementoComSelected = document.querySelector('.selected'); // selecionando elemento que possui a classe

  selecionandoElementoComSelected.classList.remove('selected'); // removendo classe selected do elemento que possuía esta classe, anteriormente

  guardando.classList.add('selected'); // elemento clicado(div), adicionando classe selected nele - com classList, ele adiciona somente, mantendo as outras classes (não há substituição)
}

function adicionandoClickPaleta() {
  // adicionando evento de click paleta

  for (
    let index1 = 0;
    index1 < selecionandoCoresPaletas.children.length;
    index1 += 1
  ) {
    //pegando tamanho dos filhos da div color palette

    selecionandoCoresPaletas.children[index1].addEventListener(
      'click',
      corSelecionada
    ); //cada div da paleta,  em sua posição,recebe o evento de click (ouvidor)
  }
}
adicionandoClickPaleta();

// requisito 8

function preenchimentoPixel(event) {
  // Quando passo o event como parâmetro na função, eu estou passando o evento do clique como parâmetro,  referente ao quadrado clicado.

  const quadradoSelecionadoPreviamente = document.querySelector('.selected'); // selecionando elemento que possui a class selected, ou seja, o quadradinho da paleta que foi clicado
  const estilosEmCssDeUmElemento = getComputedStyle(
    quadradoSelecionadoPreviamente
  ); // pegando o estilo que foi computado no css (quadradoSelecionadoPreviamente - paleta clicada) e colocando dentro da variável estilosEmCssDeUmElemento
  const corDoElemento = estilosEmCssDeUmElemento.backgroundColor; // guardando em variável, o estilo específico backgroundColor do quadrado da paleta clicado
  event.target.style.backgroundColor = corDoElemento; // o elemento que recebe o click (quadradinho pixel), o seu estilo no contexto de backgroundcolor, passa a receber o backgroundcolor do quadrado da paleta clicada

  //tendo em vista, que o estilo está aplicado por uma classe em CSS e não diretamente na tag html, quando uso querySelector('selected').background no console, o que é acessado é a tag html que não possui nenhum estilo nela (pois o estilo está em css separado). Para conseguir acessar o estilo, por meio do console, é necessário utilizar a função getComputedStyle (), usando esta função, ela me retorna todos os estilos (não só os que eu apliquei no css separado) css referente à tag
}

let selecionandoPixels = document.getElementById('pixel-board'); // elemento pai, div pai

selecionandoPixels.addEventListener('click', preenchimentoPixel);
// cada quadrado pixel,  em sua posição,recebe o evento de click (ouvidor)


// requisito 9


let selecionandoBotao = document.getElementById('clear-board'); // elemento pai

selecionandoBotao.addEventListener('click', limpaQuadro);

function limpaQuadro(event) {

  for (index = 0; index < selecionandoPixels.children.length; index +=1){

  selecionandoPixels.children[index].style.backgroundColor = 'white';

  }

}