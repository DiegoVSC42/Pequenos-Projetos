# Carrinho de Compras

Este projeto é uma aplicação web para gerenciar um carrinho de compras. Permite adicionar itens com nome, valor e quantidade, além de atualizar o valor total automaticamente conforme os itens são adicionados, editados ou excluídos.

## Funcionalidades

- **Adicionar itens:** Insira o nome e o valor do item, e ele será adicionado à lista de compras.
- **Atualização de quantidade:** Altere a quantidade de cada item, e o total será recalculado automaticamente.
- **Editar e excluir itens:** Editar o nome e valor dos itens ou removê-los do carrinho.
- **Cálculo do total geral:** O valor total é atualizado sempre que um item é adicionado, editado ou excluído.

## Tecnologias Utilizadas

- **HTML5:** Estrutura do projeto.
- **CSS3:** Estilização da página, incluindo responsividade com media queries.
- **JavaScript (ES6+):** Lógica de manipulação do DOM, cálculo do valor total, e funcionalidades de edição e exclusão de itens.

## Estrutura do Projeto

- `index.html`: Página principal com o layout básico da aplicação.
- `style.css`: Arquivo de estilos que define a aparência da aplicação.
- `scripts.js`: Arquivo principal de JavaScript responsável pela lógica de adição e atualização de itens no carrinho.
- `criarItemDaLista.js`: Função responsável por criar e adicionar dinamicamente novos itens na lista de compras. Ela lida com a exibição do nome, valor, quantidade, cálculo do total por item e gera os botões para editar ou excluir cada item.
- `excluirItem.js`: Função que permite excluir itens do carrinho.
- `editarItem.js`: Função que permite editar os detalhes de um item.
- `atualizarTotal.js`: Função responsável por atualizar o valor total da compra. Ela recebe o valor de um item adicionado ou removido e ajusta o valor total exibido no carrinho.

## Funções Principais

### `criarItemDaLista(nome, valor)`
Esta função cria dinamicamente os elementos HTML que representam cada item da lista de compras. Ela inclui o nome do item, o valor unitário, a quantidade e o total por item. Além disso, gera os botões de editar e excluir o item.

### `atualizarTotal(valor)`
Esta função atualiza o valor total da compra sempre que um item é adicionado, removido ou modificado. Ela pega o valor atual exibido no carrinho e ajusta de acordo com o valor do item adicionado ou excluído.

### `excluirItem(item)`
Função que remove o item selecionado da lista e ajusta o valor total da compra, subtraindo o valor correspondente ao item excluído.

### `editarItem(item)`
Função que permite editar o nome e o valor de um item já adicionado ao carrinho. Após a edição, o valor total é recalculado.
