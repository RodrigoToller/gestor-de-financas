
let dividaA = 0;

function saveDivida() {
  let divida = document.getElementById('divida').value;
  


  divida = parseInt(divida);
  localStorage.setItem('dividas', divida);
  let dividas = JSON.parse(localStorage.getItem('dividas')) 

  dividaA = dividaA + dividas;

  document.getElementById('divida').value = "";

}

function getDividas() {
  
  let output = "R$" + dividaA +  ",00";
  
  document.getElementById('output-divida').innerText = output;
}



let dinheiroA = 0;

function saveDinheiro() {
  let dinheiro = document.getElementById('dinheiro').value;
  
  dinheiro = parseInt(dinheiro);
  localStorage.setItem('dinheiros', dinheiro);
  let dinheiros = JSON.parse(localStorage.getItem('dinheiros')) 

  dinheiroA = dinheiroA + dinheiros;
  



}

function getDinheiro() {
  
  let output = "R$" + dinheiroA +  ",00";
  
  document.getElementById('output-dinheiro').innerText = output;
}


function getRelatorio(){

  let msgDinheiro = "R$" + dinheiroA +  ",00";
  let msgDivida = "R$" + dividaA +  ",00";


  let msgRelatorio = "Você possui a quantia de: " + msgDinheiro + "\n" + "Porém possui uma Divida de: " + msgDivida;


  let calculo = dinheiroA - dividaA;
  let msgCalculo = "R$" + calculo + ",00";

  document.getElementById('output-relatorio').innerText = msgRelatorio + "\n" + "Seu saldo final é de: " + msgCalculo;



}