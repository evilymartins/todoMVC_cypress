import telaInicial from "../support/pageObjects/tela-inicial.pageObjects";
// Importa a classe "telaInicial" do caminho especificado. Essa classe contém métodos para interagir com a página inicial da aplicação.

describe("Limpar todos os itens concluídos (remover concluídos da lista)", () => {
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

  it("Remover todos os itens concluídos", () => {
    telaInicial.concluirItem();
    // Primeiramente, conclui um item na lista, utilizando o método "concluirItem".
    telaInicial.limparItensConcluidos();
    // Em seguida, chama o método "limparItensConcluidos" para remover todas as tarefas que foram marcadas como concluídas.
  });
});
