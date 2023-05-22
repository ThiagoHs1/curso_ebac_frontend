$(document).ready(function () {
  // Manipula o evento de submissão do formulário
  $('#taskForm').submit(function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Obtém o valor do campo de entrada
    var taskName = $('#taskInput').val();

    // Cria um novo item de lista <li> com a tarefa
    var listItem = $('<li>').text(taskName);

    // Adiciona a classe completed ao clicar no item
    listItem.click(function () {
      $(this).toggleClass('completed');
    });

    // Adiciona o item de lista à lista de tarefas
    $('#taskList').append(listItem);
    // Limpa o campo de entrada
    $('#taskInput').val('');
  });
});
