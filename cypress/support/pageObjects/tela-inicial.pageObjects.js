const elem = require("../elements/tela-inicial.elements").ELEMENTS;
// Declara a constante "elem", que importa a constante "ELEMENTS" do arquivo "tela-inicial.elements".
// "ELEMENTS" contém os seletores CSS mapeados para elementos da página inicial (ToDo), como campos de input.
const itens = require("../elements/tela-inicial.elements").ITENS;
// Declara a constante "itens", que importa a constante "ITENS" do arquivo "tela-inicial.elements".
// "ITENS" armazena os seletores relacionados aos itens da lista de tarefas, como botões para marcar ou deletar tarefas.

const filtros = require("../elements/tela-inicial.elements").FILTROS;
// Declara a constante "filtros", que importa a constante "FILTROS" do arquivo "tela-inicial.elements".
// "FILTROS" contém os seletores dos filtros de visualização, como "All", "Active" e "Completed", bem como o contador de tarefas.

class telaInicial {
  // Declara a classe "telaInicial", responsável por agrupar métodos de interação com a página.

  inputText(dado) {
    cy.get(elem.inputToDo).type(dado).type("{enter}");
    // Cria o método "inputText", que recebe o dado a ser inserido como argumento.
    // Utiliza o Cypress para localizar o campo de input (mapeado por "inputToDo" via "elem"),
    // insere o texto fornecido no parâmetro "dado" e, em seguida, simula a tecla Enter.
  }

  concluirItem() {
    cy.get(itens.buttonConcluirItem).first().click();
    // Método para concluir um item da lista de tarefas.
    // Localiza o primeiro botão de conclusão de item na lista usando o seletor definido em "concluirItem.buttonConcluirItem".
    // O método "cy.get" seleciona o elemento, e ".first()" garante que o primeiro item encontrado seja o alvo.
    // O método ".click()" é então usado para simular o clique no botão de conclusão.
  }

  filtrarItens(filtro) {
    cy.get(filtros.listFilters).contains(filtro).click();
    // O método "filtrarItens" recebe um parâmetro chamado "filtro".
    // Esse parâmetro representa o tipo de filtro a ser aplicado na lista de tarefas (ex: "Active", "Completed", "All").
    // O valor passado para o parâmetro "filtro" na chamada do método é o argumento que determina qual filtro será usado.
    // O método localiza a lista de filtros na página usando o seletor "filtros.listFilters".
    // O método "contains(filtro)" encontra o item de filtro que corresponde ao texto fornecido como argumento.
    // Após localizar o filtro desejado, o método "click" é chamado para aplicar o filtro.
  }

  deletarItem() {
    cy.get(itens.listItems).first().find("button").invoke("show").click();
    // O método "deletarItem" localiza o primeiro item da lista de tarefas usando o seletor "itens.listItems".
    // Em seguida, encontra o botão de deletar associado a esse item.
    // O método 'invoke("show")' é chamado para garantir que o botão de deletar esteja visível, já que pode estar oculto por padrão.
    // Finalmente, o método "click()" é chamado para acionar a exclusão do item.
  }

  validarInput(texto) {
    cy.get(elem.inputToDo) // Localiza o campo de input usando o seletor "elem.inputToDo".
      .should("have.attr", "placeholder") // Verifica se o input tem o atributo "placeholder".
      .and("include", texto); // Verifica se o "placeholder" contém o texto passado como argumento.
  }

  validarContador(numero) {
    cy.get(filtros.contador).find("strong").should("have.text", numero);
    // Método para validar se o contador de itens pendentes na lista exibe o número correto.
    // Localiza o contador usando o seletor "filtros.contador" e, dentro dele, encontra o elemento "strong" que contém o número.
    // Verifica se o texto exibido no contador corresponde ao número passado como argumento.
  }

  validarSizeList(numero) {
    cy.get(itens.listItems).should("have.length", numero);
    // Método para validar o tamanho da lista de tarefas.
    // Localiza os itens da lista usando o seletor "itens.listItems".
    // Valida se o tamanho da lista (quantidade de itens) corresponde ao número passado no argumento.
  }
  concluirTodos() {
    cy.get(itens.buttonConcluirTodos).click();
    // Método que conclui todos os itens da lista de tarefas.
    // Utiliza o seletor "buttonConcluirTodos" para localizar o botão que marca todas as tarefas como concluídas.
  }
  limparItensConcluidos() {
    cy.get(filtros.buttonClearCompleted).click();
    // Localiza o botão "Clear Completed" usando o seletor "buttonClearCompleted" e clica nele.
    // Este botão remove da lista todas as tarefas que foram marcadas como concluídas.
  }
}

export default new telaInicial();
// Exporta uma instância da classe "telaInicial" como padrão.
// Isso permite que a classe seja usada diretamente em outros arquivos sem a necessidade de instanciar manualmente.
// A classe é disponibilizada para a suíte de testes e outros módulos.
