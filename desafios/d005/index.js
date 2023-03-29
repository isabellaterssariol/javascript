const valor = prompt('Insira aqui um valor em metros para ser convertido')

const medidas = prompt('Para qual medida você gostaria de converter: ' +
'\n1. milímetro (mm)' +
'\n2. centímetro (cm)' +
'\n3. decímetro(dm)' +
'\n4. decâmetro(dam)' +
'\n5. hectômetro (hm)' +
'\n6. quilômetro (km)')

const metros = parseFloat(valor)
const mm = metros * 1000
const cm = metros * 100
const dm = metros * 10
const dam = metros / 10
const hm = metros / 100
const km = metros / 1000

switch (medidas) {
    case '1':
        alert('O resultado é: ' + metros + ' metros = ' + mm + ' milímetros')
        break
    case '2':
        alert('O resultado é: ' + metros + ' metros = ' + cm + ' centímetros')
        break
    case '3':
        alert('O resultado é: ' + metros + ' metros = ' + dm + ' decímetros')
        break
    case '4':
        alert('O resultado é: ' + metros + ' metros = ' + dam + ' decâmetros')
        break
    case '5':
        alert('O resultado é: ' + metros + ' metros = ' + hm + ' hectômetros')
        break
    case '6':
        alert('O resultado é: ' + metros + ' metros = ' + km + ' quilômetros')
        break
    default: 
        alert('Opção inválida')
}