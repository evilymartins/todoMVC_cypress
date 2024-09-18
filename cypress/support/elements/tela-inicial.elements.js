// Este arquivo define e exporta objetos que mapeiam os seletores de elementos da página. Por exemplo:
// O objeto "ELEMENTS" contém seletores relacionados ao campo de input para adicionar novas tarefas.
// O objeto "ITENS" contém seletores relacionados aos itens da lista de tarefas (ToDo).

export const ELEMENTS = {
  // Declara e exporta o objeto "ELEMENTS" que mapeia elementos específicos da página.
  inputToDo: 'input[class="new-todo"]',
  // O seletor CSS do campo de input é mapeado para a chave "inputToDo".
  // Este seletor é usado para localizar o campo de input da lista de tarefas (ToDo).
};

export const ITENS = {
  // Declara e exporta o objeto "ITENS" que mapeia elementos relacionados aos itens da lista de tarefas.
  buttonConcluirItem: 'input[class="toggle"]',
  // Seletor CSS para o botão de marcação que conclui uma tarefa na lista.
  // Mapeado para a chave "buttonConcluirItem" para fácil acesso ao elemento de conclusão de tarefas.
  listItems: 'ul[class="todo-list"] li',
  // Seletor CSS que representa a lista de itens na página ToDo.
  // Cada item da lista é representado por um elemento <li> dentro da <ul>.
  buttonConcluirTodos: 'label[class="toggle-all-label"]',
  // Seletor CSS para o botão que conclui todas as tarefas da lista de uma vez só.
};

export const FILTROS = {
  // Exporta um objeto "FILTROS" que contém seletores para elementos relacionados a filtros na página.
  listFilters: 'ul[class="filters"]',
  // "listFilters" é o seletor CSS para a lista de filtros na página.
  contador: 'span[class="todo-count"]',
  // Seletor CSS para o contador de tarefas pendentes exibido na página.
  // Este contador exibe quantas tarefas ainda estão ativas na lista.
  buttonClearCompleted: 'button[class="clear-completed"]',
  // Seletor CSS para o botão que remove todas as tarefas que foram marcadas como concluídas.
};
