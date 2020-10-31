## Getting Started

Para rodar o projeto basta executar `yarn install` para instalar as dependências do projeto e em seguida `yarn start` para executar o projeto.

## Padrões de código

Para padronizar o código utilizei o ESLint com a style guide do AirBnb e o prettier para automatizar a formatação conforme o projeto fosse desenvolvido.

## Context API

Como o estado de TODOS ficaria no component Layout, eu teria que passar os métodos de adição e remoção de TODOS como propriedades nos componentes de níveis inferiores. Então, optei por utilizar um contexto onde toda essa informação ficaria centralizada (context/TodosContext.tsx). Com isso eu consigo acessar tanto o estado, como os métodos de uma forma mais simples e menos verbosa.

## Bibliotecas utilizadas

[uuid](https://www.npmjs.com/package/uuid) - Para gerar uma identificador único para cada TODO.

[styled-components](https://styled-components.com/) - Para estilizar os componentes.

[react-spring](https://www.react-spring.io/) - Para criar as animações de entrada e saída de TODOS eu optei por utilizar essa biblioteca. Ela tem uma solução muito boa quando temos que lidar com componentes que são resultados de algum estado, permitindo que a gente anime automaticamente esses componentes assim que o estado é alterado. (Adicionando/Removendo itens).
