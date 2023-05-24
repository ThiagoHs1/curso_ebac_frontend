$(document).ready(function () {
  $('#campo-telefone').mask('(00) 00000-0000');
  $('#campo-cep').mask('00000-000');
  $('#campo-cpf').mask('000.000.000-00');
  $('form').validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      numero: {
        required: true,
      },
      cep: {
        required: true,
      },
      CPF: {
        required: true,
      },
    },
    messages: {
      nome: 'Insira seu Nome:',
      email: 'Insira seu Email:',
      numero: 'Insira seu Número:',
      cep: 'Insira seu CEP:',
      CPF: 'Insira seu CPF:',
    },

    errorPlacement: function (error, element) {
      error.addClass('mensagem-erro');
      error.insertAfter(element);
    },
  });
});
