import { atualizarTotal } from "./js/atualizarTotal.js";
import { criarItemDaLista } from "./js/criarItemDaLista.js";

const inputNome = document.getElementById("input-item-nome");
const inputValor = document.getElementById("input-item-valor");
const botaoAdicionar = document.getElementById("botao-adicionar");


botaoAdicionar.addEventListener("click", () => {
  const nome = inputNome.value.trim();
  const valor = inputValor.value.trim();

  if (nome === "" || valor === "") {
    alert("Por favor, preencha o nome e o valor do item.");
    return;
  }

  criarItemDaLista(nome, valor);
  atualizarTotal(valor);

  inputNome.value = "";
  inputValor.value = "";
});



