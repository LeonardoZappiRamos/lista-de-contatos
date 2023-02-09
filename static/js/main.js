const modal = document.getElementById('modal');
const tabela = document.getElementById('tbody');

let linhas = '';
let i = 0;

document.getElementById('cadastro').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nome = document.getElementById('name');
  const telefone = document.getElementById('cell');
  const email = document.getElementById('email');
  const description = document.getElementById('description');

  
  let linha = '<tr>'
  linha += `<td>${i}</td>`
  linha += `<td>${nome.value}</td>`
  linha += `<td>${telefone.value}</td>`
  linha += `<td>${email.value}</td>`
  linha += `<td>${description.value}</td>`
  linha += '</tr>'

  linhas += linha;

  tabela.innerHTML = linhas;

  nome.value = '';
  telefone.value = '';
  email.value = '';
  description.value = '';

  i += 1;
  console.log(i);
});


document.getElementById('clean').addEventListener('click', () => {
  tabela.innerHTML = '';
  linhas = '';
});