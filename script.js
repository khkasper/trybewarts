const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const btnlogin = document.querySelector('.submit-botao-login');
const checkAgree = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textLen = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

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
