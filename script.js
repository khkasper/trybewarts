const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const btnlogin = document.querySelector('.submit-botao-login');
const checkAgree = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textLen = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const form = document.querySelector('#evaluation-form');
const iptName = document.querySelector('#input-name');
const iptLastname = document.querySelector('#input-lastname');
const iptEmail = document.querySelector('#input-email');
const obsField = document.querySelector('#textarea');
const slctHouse = document.querySelector('#house');
const cnfBtn = document.createElement('button');
const familyOpt = document.querySelectorAll('.family');
const subjectOpt = document.querySelectorAll('.subject');
const rateOpt = document.querySelectorAll('.rate');

function alertLogin() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnlogin.addEventListener('click', alertLogin);

btnSubmit.disabled = true;
function checkSelected() {
  if (checkAgree.checked === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

checkAgree.addEventListener('click', checkSelected);

function contador() {
  const lenText = document.querySelector('#textarea').textLength;
  counter.innerText = 500 - lenText;
}

textLen.addEventListener('keyup', contador);

// Percorrer as opções de família e retornar a marcada.

function familySlct() {
  for (let i = 0; i < familyOpt.length; i += 1) {
    if (familyOpt[i].checked) {
      return familyOpt[i].value;
    }
  }
}

// Percorrer as opções de matérias e armazenar todas marcadas.

function subjectSlct() {
  let sbjSlct = '';
  for (let i = 0; i < subjectOpt.length; i += 1) {
    if (subjectOpt[i].checked) {
      sbjSlct += `${subjectOpt[i].value} `;
    }
  }
  return sbjSlct;
}

// Percorrer as opções de avaliação e retornar a marcada.

function rateSlct() {
  for (let i = 0; i < rateOpt.length; i += 1) {
    if (rateOpt[i].checked) {
      return rateOpt[i].value;
    }
  }
}

// Adiconando escutador no botão 'submit' para limpar o formulário e retornar um resumo do que foi preenchido.

btnSubmit.addEventListener('click', () => {
  form.innerHTML = '';
  form.innerHTML += '<h1>Confirme as informações inseridas.</h1>';
  form.innerHTML += `<p>Nome: ${iptName.value} ${iptLastname.value}</p>`;
  form.innerHTML += `<p>Email: ${iptEmail.value}</p>`;
  form.innerHTML += `<p>Casa: ${slctHouse.value}</p>`;
  form.innerHTML += `<p>Família: ${familySlct()}</p>`;
  form.innerHTML += `<p>Matérias: ${subjectSlct()}</p>`;
  form.innerHTML += `<p>Avaliação: ${rateSlct()}</p>`;
  form.innerHTML += `<p>Observações: ${obsField.value}</p>`;
  cnfBtn.innerText = 'Confirmar';
  form.appendChild(cnfBtn);
});

// Confirmação das informações inseridas.

cnfBtn.addEventListener('click', () => {
  form.innerHTML = '';
  form.innerHTML += '<h2>Obrigado por sua resposta!</h2>';
});
