document.addEventListener("DOMContentLoaded", inserirBotoes);

function inserirBotoes() {
    div = document.createElement("div");
    div2 = document.createElement("div");
    div.innerHTML = '<button onclick="aumentarFonte()">+</button';
    div2.innerHTML = '<button onclick="diminuirFonte()">-</button>';
    document.body.prepend(div);
    document.body.prepend(div2);
}
function aumentarFonte() {
    var titulo = document.getElementById('titulo');
    titulo.style.fontSize="50px";
  }
  function diminuirFonte() {
    var titulo = document.getElementById('titulo');
    titulo.style.fontSize="25px";
  }
