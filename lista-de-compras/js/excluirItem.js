export const excluirItem = (item)=>{
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?")
    if(confirmacao){
        
        item.remove()
    }
}