export const editarItem = (elemento) =>{
    let novoItem = prompt("Digite o novo nome do item")
    let novoValor = prompt("Digite o novo valor do item")
    if(novoItem !== null && novoItem.trim() !== ""){
        const itemTextoAtualizado = elemento.querySelector(".nome-item")
        itemTextoAtualizado.textContent = novoItem
        const valorTextoAtualizado = elemento.querySelector(".valor-item")
        valorTextoAtualizado.textContent = `R$${parseFloat(novoValor).toFixed(2)}`
    }
}