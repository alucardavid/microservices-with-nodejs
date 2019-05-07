
function aplicarDescontoTest() {
    return aplicarDesconto(10, 2) === 8
}

function aplicarDesconto(valor, desconto) {
    if (desconto > valor) return 0
    
    return valor - desconto
}


console.log('A alicação de desconto esta funcionando?')
console.log(aplicarDescontoTest())

function aplicarDescontoGrandeTest() {
    return aplicarDesconto(1, 10) === 0
}

console.log('A aplicação de desconto grande esta funcionando?')
console.log(aplicarDescontoGrandeTest())
