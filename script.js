var button = document.querySelector('#button');
var tudo = document.querySelector("#tudo");

button.addEventListener("click", botao);

function botao(e){
  document.body.style.backgroundImage = 'url("https://cdn.discordapp.com/attachments/403606045248716804/834839149977927720/unknown.png")'
  tudo.style.display="none";
}