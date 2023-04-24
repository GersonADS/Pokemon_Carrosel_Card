const btnAvancar = document.querySelector("#btn-avancar");
const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0;

function esconderCartao(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {

  esconderCartao();
    
  cartaoAtual++;
  if (cartaoAtual === 3) cartaoAtual = 0;
  mostrarCartao(cartaoAtual);

});


const btnVoltar = document.querySelector("#btn-voltar");

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) cartaoAtual = 3;

  esconderCartao();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);

});