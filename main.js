const form = document.getElementById('deposito-form'); // Seleciona o formulário pelo seu ID

// Cria um novo elemento <p> para exibir a mensagem de resultado

const mensagemResultado = document.createElement('p');

// Cria um novo elemento <p> para exibir a mensagem de resultado

mensagemResultado.classList.add('resultado');

form.addEventListener('submit', function (event) {
  // Cria um novo elemento <p> para exibir a mensagem de resultado

  event.preventDefault();
  // Obtém os valores dos campos de número A e número B

  const numeroA = parseInt(document.getElementById('numeroA').value);
  const numeroB = parseInt(document.getElementById('numeroB').value);
  // Verifica se o número B é maior que o número A

  if (numeroB > numeroA) {
    // Se for válido, define o texto e a classe para uma mensagem positiva

    mensagemResultado.textContent =
      'Formulário válido. Número B é maior que o número A.';
    mensagemResultado.classList.remove('invalido');
    mensagemResultado.classList.add('valido');
  } else {
    // Se for inválido, define o texto e a classe para uma mensagem negativa

    mensagemResultado.textContent =
      'Formulário inválido. Número B deve ser maior que o número A.';
    mensagemResultado.classList.remove('valido');
    mensagemResultado.classList.add('invalido');
  }
  // Adiciona a mensagem de resultado ao formulário

  form.appendChild(mensagemResultado);
});
