const form = document.getElementById('deposito-form');
const mensagemResultado = document.createElement('p');
mensagemResultado.classList.add('resultado');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const numeroA = parseInt(document.getElementById('numeroA').value);
  const numeroB = parseInt(document.getElementById('numeroB').value);

  if (numeroB > numeroA) {
    mensagemResultado.textContent =
      'Formulário válido. Número B é maior que o número A.';
    mensagemResultado.classList.remove('invalido');
    mensagemResultado.classList.add('valido');
  } else {
    mensagemResultado.textContent =
      'Formulário inválido. Número B deve ser maior que o número A.';
    mensagemResultado.classList.remove('valido');
    mensagemResultado.classList.add('invalido');
  }

  form.appendChild(mensagemResultado);
});
