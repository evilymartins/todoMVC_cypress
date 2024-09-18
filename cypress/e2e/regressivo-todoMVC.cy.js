import telaInicial from "../support/pageObjects/tela-inicial.pageObjects";

describe("Regressivo ToDo", () => {
  context("Validar tela inicial", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("Validar a aria label de input de dados", () => {
      telaInicial.validarInput("What needs to be done?");
    });
  });

  context("Validar a adição de itens a lista", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Adicionar mais de um item a lista", () => {
      var todosItens = ["Maça", "Banana", "Cenoura"];
      todosItens.forEach(function (item, indice, array) {
        telaInicial.inputText(item);
      });
      telaInicial.validarContador(3);
    });
  });

  context("Validar a conclusão de itens", () => {
    beforeEach(() => {
      cy.visit("/");
      var todosItens = ["Maça", "Banana", "Cenoura"];
      todosItens.forEach(function (item, indice, array) {
        telaInicial.inputText(item);
      });
    });

    it("Concluir um item da lista (ToDo)", () => {
      telaInicial.concluirItem();
      telaInicial.validarContador(2);
    });
  });

  context("Validar os filtros da aplicação", () => {
    beforeEach(() => {
      cy.visit("/");
      var todosItens = ["Maça", "Banana", "Cenoura"];
      todosItens.forEach(function (item, indice, array) {
        telaInicial.inputText(item);
      });
      telaInicial.concluirItem();
    });

    it("Filtrar itens ativos", () => {
      telaInicial.filtrarItens("Active");
      telaInicial.validarSizeList(2);
    });

    it("Filtrar itens concluídos", () => {
      telaInicial.filtrarItens("Completed");
      telaInicial.validarSizeList(1);
    });

    it("Filtrar todos os itens", () => {
      telaInicial.filtrarItens("All");
      telaInicial.validarSizeList(3);
    });
  });

  context("Validar a exclusão de itens da lista", () => {
    beforeEach(() => {
      cy.visit("/");
      var todosItens = ["Maça", "Banana", "Cenoura"];
      todosItens.forEach(function (item, indice, array) {
        telaInicial.inputText(item);
      });
    });

    it("Deletar um item da lista (ToDo)", () => {
      telaInicial.deletarItem();
      telaInicial.validarContador(2);
    });
  });

  context("Validar a conclusão de itens em lote ", () => {
    beforeEach(() => {
      cy.visit("/");
      var todosItens = ["Maça", "Banana", "Cenoura"];
      todosItens.forEach(function (item, indice, array) {
        telaInicial.inputText(item);
      });
    });

    it("Concluir itens em lote (ToDo)", () => {
      telaInicial.concluirTodos();
      telaInicial.validarContador(0);
    });
  });

  context("Validar a remoção de TODOS os itens concluídos", () => {
    beforeEach(() => {
      cy.visit("/");
      var todosItens = ["Maça", "Banana", "Cenoura"];
      todosItens.forEach(function (item, indice, array) {
        telaInicial.inputText(item);
      });
    });

    it("Remover todos os itens concluídos", () => {
      telaInicial.concluirItem();
      telaInicial.limparItensConcluidos();
      telaInicial.validarSizeList(2);
    });
  });
});
