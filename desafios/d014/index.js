let escolha = ''
let x = ''
let y = ''
let z = ''


function areaTriangular(x, y) {
    return ((x * y)/2)
}

function areaRetangular(x, y) {
    return x * y
}

function areaQuadrada(x) {
    return x * x
}

function areaTrapezio(x, y, z) {
    return (((x * y) + z)/2)
}

function areaCircular(x) {
    return (x * x) * 3.14
}



do {
    escolha = prompt(
        'Seja bem-vindo(a)!' +
        '\n\nEscolha uma opção de cálculo: ' + 
        '\na. Área do triângulo' +
        '\nb. Área do retângulo' +
        '\nc. Área do quadrado' +
        '\nd. Área do trapézio' +
        '\ne. Área do círculo' +
        '\nf. Sair')

    switch (escolha) {
        case 'a':
            x = prompt('Qual a base do triângulo?')
            y = prompt('Qual a altura do triângulo?')
            alert('O resultado da área do triângulo é: ' + areaTriangular(x, y))
            break
        case 'b':
            x = prompt('Qual a base do retângulo?')
            y = prompt('Qual a altura do retângulo?')
            alert('O resultado da área do retângulo é: '  + areaRetangular(x, y))
            break  
        case 'c':
            x = prompt ('Qual o lado do quadrado?')
            alert('O resultado da área do quadrado é: ' + areaQuadrada(x))
            break 
        case 'd':
            x = parseFloat(prompt ('Qual a base maior do trapézio?'))
            y = parseFloat(prompt ('Qual a base menor do trapézio?'))
            z = parseFloat(prompt ('Qual a altura do trapézio?'))
            alert('O resultado da área do trapézio é: ' + areaTrapezio(x, y, z))
            break 
        case 'e':
            x = prompt ('Qual o raio do círculo?')
            alert('O resultado da área do círculo é: ' + areaCircular(x))
            break 
        case 'f':
            alert('Encerrando programa')
            break
        default:
            alert('Opção inválida')
    }

} while (escolha !== 'f')
