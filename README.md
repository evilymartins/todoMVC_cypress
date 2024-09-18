## Projeto de automação todoMVC com Cypress

Este projeto é uma automação de testes para a aplicação todoMVC usando Cypress. O objetivo é testar funcionalidades básicas da aplicação, como adicionar, concluir, filtrar e deletar itens da lista de tarefas.

## Estrutura de Page Object

O projeto utiliza a abordagem de Page Objects para melhorar a manutenção e a legibilidade dos testes. A estrutura de Page Objects tem como objetivo separar os elementos e ações das páginas dos cenários de teste. Em outras palavras, cria uma divisão entre os testes e as interações com as telas da aplicação.

Aqui está um resumo de como os Page Objects estão organizados:

- elements/: Contém arquivos que definem e exportam objetos onde cada chave dentro desses objetos representa um elemento da página e o valor é o seletor CSS correspondente.
- pageObjects/: Contém arquivos que definem classes de Page Objects. Cada classe encapsula métodos para interagir com os elementos da página, utilizando os seletores definidos nos arquivos de elements/.

## Estrutura do Projeto

O projeto é organizado da seguinte maneira:

- **`/e2e`**: Contém os arquivos de teste isolados e o teste regressivo.
- **`/support`**: Contém os arquivos de Page Objects e elementos.

### Arquivos de Teste

1. **`tela-inicial.cy.js`**: Testa o acesso à tela inicial.
2. **`add-item.cy.js`**: Testa a adição de múltiplos itens à lista.
3. **`concluir-item.cy.js`**: Testa a conclusão de um item.
4. **`concluir-itensLote.cy.js`**: Testa a conclusão de todos os itens em lote.
5. **`filtrar-item.cy.js`**: Testa os filtros da aplicação.
6. **`deletar-item.cy.js`**: Testa a exclusão de um item.
7. **`limpar-itensConcluidos.cy.js`**: Testa a remoção de todos os itens concluídos em lote.
8. **`regressivo-todoMVC.cy.js`**: Teste regressivo que engloba todos os testes isolados.

### Arquivos de PageObjects

- **`/support/pageObjects/tela-inicial.pageObjects.js`**: Define a classe `telaInicial` que contém métodos para interagir com a página.

### Arquivos de Elements

- **`/support/elements/tela-inicial.elements.js`**: Define os seletores CSS para elementos da página.

## Configuração do Projeto

Para configurar o projeto e executar os testes, siga os passos abaixo:

1. **Instalar node:** [baixe aqui](https://nodejs.org/en/download/package-manager)

**No terminal, execute os seguintes comandos:**

2. **Instalar yarn:**
   ```bash
   npm install yarn
    ```

3. **Crie uma pasta para o projeto** e navegue até ela:
    ```bash
    mkdir nome-do-projeto
    cd nome-do-projeto
    ```

4. **Inicialize o projeto com Yarn**:
    ```bash
    yarn init
    ```

5. **Instale o Cypress**:
    ```bash
    yarn add cypress
    ```

7. **Abra o Cypress** para a primeira execução e configuração inicial:
    ```bash
    yarn run cypress open
    ```

   Isso criará a estrutura de pastas necessária e arquivos de configuração padrão do Cypress.

8. **Adicione os arquivos de teste e configuração**:
    - Copie os arquivos de teste para a pasta `/e2e`.
    - Copie os arquivos de pageObjects e elements para a pasta `/support`.

## Estrutura dos Arquivos

### `tela-inicial.elements.js`

Define e exporta os seletores CSS.

### `tela-inicial.pageObjects.js`

Contém a classe `telaInicial` com métodos para interagir com os elementos da página, como adicionar, concluir e filtrar itens.

### Testes Isolados

Cada arquivo de teste (por exemplo, `tela-inicial.cy.js`, `add-item.cy.js`) contém casos específicos para validar funcionalidades da aplicação.

### Teste Regressivo

**`regressivo-todoMVC.cy.js`**: Executa todos os testes em uma única suíte para validar a aplicação de ponta a ponta.

## Execução dos Testes

Para abrir a interface gráfica do Cypress e executar testes interativamente:

```bash
yarn run cypress open
```
## Recursos Adicionais

- Aplicação [todoMVC]: https://todomvc.com/examples/javascript-es6/dist/
- Documentação do Cypress: https://docs.cypress.io
- Artigo sobre Page Object: https://vitormarinheiroautomation.medium.com/cypress-page-object-sucesso-6841cb7c19a0

