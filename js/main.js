const form = document.getElementById('deposito-form');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formValido = false;

function validanome(nomecompleto) {
  const nomeComArray = nomecompleto.split(' ');
  return nomeComArray.length >= 2;
}

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Cancelar reload

  const numeroBeneficiario = document.getElementById('numero-conta');
  const valorDeposito = document.getElementById('valor-deposito');
  const mensagemSucesso = `Montante de <b>${valorDeposito.value}</b> depositado para o cliente  <b> ${nomeBeneficiario.value}</b> - conta: <b> ${numeroBeneficiario.value} </b> `;

  let formValido = validanome(nomeBeneficiario.value);
  if (formValido) {
    const ContainerMensagemSucesso = document.querySelector('.success');
    ContainerMensagemSucesso.innerHTML = mensagemSucesso;
    ContainerMensagemSucesso.style.display = 'block';

    document.querySelector('.success').innerHTML = mensagemSucesso;
    nomeBeneficiario.value = '';
    numeroBeneficiario.value = '';
    valorDeposito.value = '';
  } else {
    nomeBeneficiario.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
  }
});

nomeBeneficiario.addEventListener('keyup', function (e) {
  console.log(e.target.value);
  formValido = validanome(e.target.value);

  if (!formValido) {
    nomeBeneficiario.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
  } else {
    nomeBeneficiario.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
  }
});
