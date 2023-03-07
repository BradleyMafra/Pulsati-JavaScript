// MODAL FUNCIONANDO

const novaTransacaoBtn = document.querySelector(".new-transition button");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const addBtn = document.querySelector(".add-btn");
const descricaoInput = document.querySelector("#descricao");
const valorInput = document.querySelector("#valor");
const dataInput = document.querySelector("#data");
const depositar = document.getElementById("depositar");
const sacar = document.getElementById("sacar");

// ABRIR O MODAL FUNCIONANDO

novaTransacaoBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// FECHAR O MODAL FUNCIONANDO

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// FUNÇÃO PARA CALCULAR O TOTAL DAS ENTRADAS FUNCIONANDO

let entradaTotal = 0;
const PegaEntrada = document.getElementById("entradas");

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

  entradaTotal += Number(valor);
  PegaEntrada.textContent = entradaTotal.toFixed(2);

  // ATUALIZA O VALOR TOTAL FUNCIONANDO
  atualizaValorTotal();

  // Salva as variáveis entradaTotal, saidaTotal e total no localStorage
  localStorage.setItem("entradaTotal", entradaTotal);
  localStorage.setItem("saidaTotal", saidaTotal);
  localStorage.setItem("total", total.textContent);
};

// FUNÇÃO PARA CALCULAR O TOTAL DAS SAIDAS FUNCIONANDO

let saidaTotal = 0;
const PegaSaida = document.getElementById("saidas");

const removeTransacao = () => {
  const descricao = descricaoInput.value;
  const valor = valorInput.value;
  const data = dataInput.value;

  const descricaoTransacao = document.createElement("li");
  descricaoTransacao.textContent = descricao;

  const valorTransacao = document.createElement("li");
  valorTransacao.textContent = "-" + valor;

  const dataTransacao = document.createElement("li");
  dataTransacao.textContent = data;

  descricao1.appendChild(descricaoTransacao);
  valor1.appendChild(valorTransacao);
  data1.appendChild(dataTransacao);

  modal.style.display = "none";

  saidaTotal += Number(valor);
  PegaSaida.textContent = saidaTotal.toFixed(2);

  // ATUALIZA O VALOR TOTAL FUNCIONANDO
  atualizaValorTotal();

  // Salva as variáveis entradaTotal, saidaTotal e total no localStorage
  localStorage.setItem("entradaTotal", entradaTotal);
  localStorage.setItem("saidaTotal", saidaTotal);
  localStorage.setItem("total", total.textContent);
};

// FUNÇÃO PARA ATUALIZAR O VALOR TOTAL FUNCIONANDO

const atualizaValorTotal = () => {
  const valorTotal = entradaTotal - saidaTotal;
  // valorTotal *= -1;
  total.textContent = valorTotal.toFixed(2);
};

// FUNÇÃO PARA RECUPERAR INFORMAÇÕES SALVAS NO LOCALSTORAGE

const recuperarLocalStorage = () => {
  // Recupera as variáveis entradaTotal, saidaTotal e total do localStorage, se existirem
  const entradaTotalStorage = localStorage.getItem("entradaTotal");
  const saidaTotalStorage = localStorage.getItem("saidaTotal");
  const totalStorage = localStorage.getItem("total");

  // Se existir valor no localStorage, atualiza as variáveis globais e o conteúdo da página
  if (entradaTotalStorage !== null) {
    entradaTotal = Number(entradaTotalStorage);
    PegaEntrada.textContent = entradaTotal.toFixed(2);
  }

  if (saidaTotalStorage !== null) {
    saidaTotal = Number(saidaTotalStorage);
    PegaSaida.textContent = saidaTotal.toFixed(2);
  }

  if (totalStorage !== null) {
    total.textContent = totalStorage;
  }

  // Atualiza o valor total com base nas variáveis entradaTotal e saidaTotal
  atualizaValorTotal();
};

// EVENTO DE RECARGA DA PÁGINA

window.onload = recuperarLocalStorage;
