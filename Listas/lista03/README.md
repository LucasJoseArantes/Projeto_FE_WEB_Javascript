# Estudantes

Este é um projeto simples que permite visualizar informações sobre os estudantes de uma turma, utilizando HTML, CSS e JavaScript.

## Funcionalidades

- Visualização de todos os estudantes
- Filtragem dos estudantes por gênero (homens ou mulheres)
- Filtragem dos estudantes por status de aprovação (aprovados ou reprovados)
- Verificação se todos os alunos foram aprovados ou não
- Cálculo da nota média da turma

## Como funciona

- O arquivo `index.html` contém a estrutura da página web, incluindo o título, o dropdown de opções e o contêiner para os estudantes.
- O arquivo `styles.css` define os estilos visuais da página para uma melhor experiência do usuário.
- O arquivo `script.js` contém o código JavaScript responsável por fazer requisições assíncronas para obter os dados dos estudantes, filtrar esses dados de acordo com a opção selecionada no dropdown e renderizar os resultados na página.
- Os dados dos estudantes são armazenados no arquivo `alunos.json` em formato JSON.

## Principais Conceitos

- **Requisição Assíncrona (AJAX)**: Utilizado para carregar os dados dos estudantes de forma assíncrona, permitindo que a página permaneça responsiva enquanto os dados são carregados em segundo plano.
- **Manipulação do DOM**: O JavaScript é usado para manipular o Document Object Model (DOM) da página, adicionando, removendo ou modificando elementos HTML para refletir as escolhas do usuário e os resultados dos filtros.
- **Métodos de Array**: Foram utilizados métodos como `filter`, `map`, `every` e `reduce` para manipular os dados dos estudantes de forma eficiente, sem a necessidade de loops explícitos.
- **Estilização com CSS**: Utilizado para criar uma interface visual agradável e responsiva, melhorando a experiência do usuário ao interagir com a página.

## Como usar

1. Clone ou baixe este repositório em seu computador.
2. Abra o arquivo `index.html` em um navegador da web.
3. Selecione uma opção no dropdown para visualizar os resultados correspondentes.

## Exemplo de Uso

Suponha que você queira ver apenas os estudantes do sexo feminino. Selecione a opção "Estudantes Mulheres" no dropdown e os resultados serão filtrados automaticamente para exibir apenas os estudantes do sexo feminino.
