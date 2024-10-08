const totalGeral = document.getElementById("valor-total");
export function atualizarTotal(valor) {
    const valorTexto = totalGeral.innerText;
    const valorFormatado = valorTexto.replace("R$", "").trim();
    const valorFloat = parseFloat(valorFormatado);
    totalGeral.innerText = `R$${(valorFloat + parseFloat(valor)).toFixed(2)}`;
}
  