import telaInicial from "../support/pageObjects/tela-inicial.pageObjects";
// Importa a classe "telaInicial" do caminho especificado. Essa classe contém métodos para interagir com a página inicial da aplicação.

// describe = grupo de testes (funcionalidade).
// it = caso de teste (cenário individual).

describe("Acessar tela inicial do todoMVC", () => {
  it("Acessar tela inicial e adicionar 1 item a lista (ToDo)", () => {
    cy.visit("https://todomvc.com/examples/javascript-es6/dist/");
    // Acessa a URL informada e carrega a página correspondente.
    telaInicial.inputText("Item 1");
    // Chama o método inputText da classe "telaInicial". Esse método encontra o campo de input e insere o valor "Item 1" seguido de Enter.
  });
});
