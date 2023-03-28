const entrada1 = prompt('Insira aqui o primeiro número')
const entrada2 = prompt('Insira aqui o segundo número')

const n1 = parseFloat(entrada1)
const n2 = parseFloat(entrada2)

const soma = n1 + n2
const subtracao = n1 - n2
const multiplicacao = n1 * n2
const divisao = n1 / n2


alert(
    "Operações feitas com sucesso!\n" + 
    "Soma: " + soma + 
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao + 
    "\nDivisão: " + divisao)