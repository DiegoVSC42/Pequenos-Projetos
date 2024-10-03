const botaoEnviar = document.getElementById("botao")
const inputAltura = document.getElementById("altura")
const inputPeso = document.getElementById("peso")
const containerResposta = document.getElementById("container-resposta")

botaoEnviar.addEventListener("click", calcularIMC)

function calcularIMC(evento) {
    evento.preventDefault()

    let altura = parseFloat(inputAltura.value); 
    const peso = parseFloat(inputPeso.value);     
    
    if(altura > 100){
        altura = altura/100
    }

    console.log(altura)
    if (!altura || !peso || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para altura e peso. \n(Obs.: Os valores devem ser maiores que 0!)")
        return
    }

    let imc = peso / (altura * altura)
    
    inputAltura.value = ""
    inputPeso.value = ""
    
    containerResposta.innerHTML = ""

    const textoInformativo = document.createElement("p")
    textoInformativo.innerText = `Seu IMC é: ${imc.toFixed(2)}`
    textoInformativo.classList.add("texto-resposta")
    containerResposta.appendChild(textoInformativo)

    const textoClassificação = document.createElement("p")
    textoClassificação.innerText = `Sua classificação é: ${regrasIMC(imc)}`
    textoClassificação.classList.add("texto-resposta")
    containerResposta.appendChild(textoClassificação)
}

function regrasIMC(valor) {
    if (valor <= 18.4) return "Abaixo do peso!"
    if (valor > 18.4 && valor <= 24.9) return "Peso ideal!"
    if (valor > 24.9 && valor <= 29.9) return "Sobrepeso!"
    if (valor > 29.9 && valor <= 34.9) return "Obesidade Grau 1!"
    if (valor > 34.9 && valor <= 39.9) return "Obesidade Grau 2!"
    if (valor > 39.9) return "Obesidade Grau 3!"
}
