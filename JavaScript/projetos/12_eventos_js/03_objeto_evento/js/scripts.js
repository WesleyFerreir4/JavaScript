let btn1 = document.querySelector("#btn1"); // Acha os botões
let btn2 = document.querySelector("#btn2");

function msg(e) {
    console.log(e);
}

btn1.addEventListener("click", msg); //cria evento para o botao 1

btn2.addEventListener("click", function(event) {
    console.log(event); //remove evento do botão 1 ao clicar no botão 2
});