
const novaTransacaoBtn = document.querySelector('.new-transition button');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const addBtn = document.querySelector('.add-btn');
const descricaoInput = document.querySelector('#descricao');
const valorInput = document.querySelector('#valor');
const dataInput = document.querySelector('#data');

novaTransacaoBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});


