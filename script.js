const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const btnlogin = document.querySelector('.submit-botao-login');
const checkAgree = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');

function alertLogin() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnlogin.addEventListener('click', alertLogin);

btnSubmit.disabled = true;
function checkSelected(event) {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  if (event.target.classList.contains('botao-ativado')) {
    event.target.classList.remove('botao-ativado');
    btnSubmit.disabled = true;
  } else {
    event.target.classList.add('botao-ativado');
    btnSubmit.disabled = false;
  }
}

checkAgree.addEventListener('click', checkSelected);
