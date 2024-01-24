const botao = document.querySelector("button");

function somar() {
  const div = document.querySelector("div");
  console.log(div);
}

if (botao) {
  botao.addEventListener("click", somar);
}
