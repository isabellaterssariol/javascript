function calcular(a, b, operacao) {
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y) {
    console.log("Realizando soma.")
    return x + y
}


calcular(3, 5, somar)

calcular(9, 2, function (x, y) {
    console.log("Realizando substração.")
    return x - y
})


function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ['Maça', 'Banana', 'Laranja', 'Limão']

for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i]), i, lista
}

lista.forEach(exibirElemento) //fará a mesma coisa da parte de cima para iterar cada parte do array //

lista.forEach(function (elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
})