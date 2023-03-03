const novaTransacaoBtn = document.querySelector('.new-transition button');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const addBtn = document.querySelector('.add-btn');
const descricaoInput = document.querySelector('#descricao');
const valorInput = document.querySelector('#valor');
const dataInput = document.querySelector('#data');
const depositar = document.getElementById('depositar');
const sacar = document.getElementById('sacar');

novaTransacaoBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

const addTrasacao = () => {
  
}