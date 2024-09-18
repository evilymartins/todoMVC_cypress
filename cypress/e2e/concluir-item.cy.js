import telaInicial from "../support/pageObjects/tela-inicial.pageObjects";
// Importa a classe "telaInicial" do caminho especificado. Essa classe contém métodos para interagir com a página inicial da aplicação.

describe("Concluir itens da lista (ToDo)", () => {
  beforeEach(() => {
    // Antes de cada caso de teste, visita a URL configurada no arquivo cypress.config.js.
    cy.visit("/");
    var todosItens = ["Maça", "Banana", "Cenoura"];
    // Declara um array "todosItens" contendo 3 itens.
    todosItens.forEach(function (item, indice, array) {
      // Usa o método forEach para percorrer o array "todosItens".
      // Para cada item, chama o método inputText da classe "telaInicial", que insere o valor do item no campo de input e aciona o Enter até que todos os itens tenham sido inseridos na lista.
      telaInicial.inputText(item);
    });
  });

  it("Concluir um item da lista (ToDo)", () => {
    telaInicial.concluirItem();
    // Chama o método concluirItem da classe "telaInicial".
    // Este método localiza e clica no botão para concluir o primeiro item da lista de tarefas.
  });
});
