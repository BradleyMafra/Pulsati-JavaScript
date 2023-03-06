const novaTransacaoBtn = document.querySelector(".new-transition button");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const addBtn = document.querySelector(".add-btn");
const descricaoInput = document.querySelector("#descricao");
const valorInput = document.querySelector("#valor");
const dataInput = document.querySelector("#data");
const depositar = document.getElementById("depositar");
const sacar = document.getElementById("sacar");

novaTransacaoBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

let entradasTotal = parseFloat(document.getElementById("entrada").textContent);

const addTransacao = () => {
  const descricao = descricaoInput.value;
  const valor = valorInput.value;
  const data = dataInput.value;

  const descricaoTransacao = document.createElement("li");
  descricaoTransacao.textContent = descricao;

  const valorTransacao = document.createElement("li");
  valorTransacao.textContent = valor;

  const dataTransacao = document.createElement("li");
  dataTransacao.textContent = data;

  descricao1.appendChild(descricaoTransacao);
  valor1.appendChild(valorTransacao);
  data1.appendChild(dataTransacao);
  
  modal.style.display = "none";

  if(depositar.classList.contains('click')){
    entradasTotal += valor;
    document.getElementById("entrada").textContent = entradasTotal.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  }
}


const removeTransacao = () => {
  const descricao = descricaoInput.value;
  const valor = valorInput.value * -1;
  const data = dataInput.value;

  const descricaoTransacao = document.createElement("li");
  descricaoTransacao.textContent = descricao;

  const valorTransacao = document.createElement("li");
  valorTransacao.textContent = valor;

  const dataTransacao = document.createElement("li");
  dataTransacao.textContent = data;

  descricao1.appendChild(descricaoTransacao);
  valor1.appendChild(valorTransacao);
  data1.appendChild(dataTransacao);

  modal.style.display = "none";

}


