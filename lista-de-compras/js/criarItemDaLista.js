import { excluirItem } from "./excluirItem.js";
import { editarItem } from "./editarItem.js";
const listaDeCompras = document.getElementById("lista-de-compras");
const totalGeral = document.getElementById("valor-total");

export function criarItemDaLista(nome, valor) {
  const itemDaLista = document.createElement("li");

  const nomeItem = document.createElement("p");
  nomeItem.classList.add("nome-item");
  nomeItem.textContent = nome;

  const containerValorItem = document.createElement("div");
  containerValorItem.classList.add("container-valor");
  const labelValor = document.createElement("label");
  labelValor.textContent = "Valor:";
  const valorItem = document.createElement("p");
  valorItem.classList.add("valor-item");
  valorItem.textContent = `R$${parseFloat(valor).toFixed(2)}`;

  const containerQuantidade = document.createElement("div");
  containerQuantidade.classList.add("container-quantidade");
  const labelQuantidade = document.createElement("label");
  labelQuantidade.htmlFor = "quantidade";
  labelQuantidade.textContent = "Quantidade:";
  const inputQuantidade = document.createElement("input");
  inputQuantidade.id = "quantidade";
  inputQuantidade.type = "number";
  inputQuantidade.classList.add("quantidade");
  inputQuantidade.min = 1;
  inputQuantidade.max = 100;
  inputQuantidade.value = 1;

  const containerTotal = document.createElement("div");
  containerTotal.classList.add("container-valor");
  const labelTotal = document.createElement("label");
  labelTotal.textContent = "Total:";
  const totalItem = document.createElement("p");
  totalItem.classList.add("valor-item");
  totalItem.textContent = `R$${(parseFloat(valor) * 1).toFixed(2)}`;

  inputQuantidade.quantidadeAntiga = 1;
  totalItem.valorAntigo = parseFloat(valor);

  inputQuantidade.addEventListener("input", () => {
    const quantidadeNova = parseInt(inputQuantidade.value);
    const valorTotalAntigo = totalItem.valorAntigo;
    console.log(valorTotalAntigo)
    const novoTotal = (quantidadeNova * parseFloat(valor)).toFixed(2);
    totalItem.textContent = `R$${novoTotal}`;

    const valorAtual = parseFloat(
      totalGeral.innerText.replace("R$", "").trim()
    );
    const totalGeralAtualizado = (
      valorAtual -
      valorTotalAntigo +
      parseFloat(novoTotal)
    ).toFixed(2);
    totalGeral.innerText = `R$${totalGeralAtualizado}`;

    totalItem.valorAntigo = parseFloat(novoTotal);
  });

  const containerBotoes = document.createElement("div");
  containerBotoes.classList.add("container-botoes");
  const botaoDelete = document.createElement("button");
  botaoDelete.type = "button";
  botaoDelete.classList.add("button");
  botaoDelete.innerHTML = '<img src="./img/delete.svg" alt="delete button" />';

  botaoDelete.addEventListener("click", () => {
    excluirItem(itemDaLista);
    const valorTotalAntigo = parseFloat(totalItem.valorAntigo);
    const valorAtual = parseFloat(
      totalGeral.innerText.replace("R$", "").trim()
    );
    const totalGeralAtualizado = (valorAtual - valorTotalAntigo).toFixed(2);
    totalGeral.innerText = `R$${totalGeralAtualizado}`;
  });

  const botaoEdit = document.createElement("button");
  botaoEdit.type = "button";
  botaoEdit.classList.add("button");
  botaoEdit.innerHTML = '<img src="./img/edit.svg" alt="edit button" />';

  botaoEdit.addEventListener("click", () => {
    editarItem(itemDaLista);

    const novoValor = parseFloat(
      valorItem.textContent.replace("R$", "").trim()
    );
    const quantidadeNova = parseInt(inputQuantidade.value);

    const novoTotal = (quantidadeNova * novoValor).toFixed(2);

    totalItem.textContent = `R$${novoTotal}`;

    const valorAtual = parseFloat(
      totalGeral.innerText.replace("R$", "").trim()
    );

    const valorTotalAntigo = totalItem.valorAntigo;
    const totalGeralAtualizado = (
      valorAtual -
      valorTotalAntigo +
      parseFloat(novoTotal)
    ).toFixed(2);

    totalGeral.innerText = `R$${totalGeralAtualizado}`;

    totalItem.valorAntigo = parseFloat(novoTotal);
    console.log("valor antigo", totalItem.valorAntigo);
    valor = totalItem.valorAntigo;
  });

  containerValorItem.appendChild(labelValor);
  containerValorItem.appendChild(valorItem);

  containerQuantidade.appendChild(labelQuantidade);
  containerQuantidade.appendChild(inputQuantidade);

  containerTotal.appendChild(labelTotal);
  containerTotal.appendChild(totalItem);

  containerBotoes.appendChild(botaoDelete);
  containerBotoes.appendChild(botaoEdit);

  itemDaLista.appendChild(nomeItem);
  itemDaLista.appendChild(containerValorItem);
  itemDaLista.appendChild(containerQuantidade);
  itemDaLista.appendChild(containerTotal);
  itemDaLista.appendChild(containerBotoes);

  listaDeCompras.appendChild(itemDaLista);
}
