const resultado = prompt('Escolha uma alternativa: \n1)\n2)\n3)')

const resultadoNumerico = parseFloat(resultado)

switch (resultadoNumerico) {
    case 1:
        alert('O resultado é 1') 
        break /* O programa não rodará as linhas abaixo, por exemplo, não exibirá o default*/
    case 2:
        alert('O resultado é 2')
        break 
    case 3:
        alert('O resultado é 3')
        break
    default: /* O default será mostrado ao fim independente de qual caso for, exceto se mandar parar */
        alert('Finalizando...')
}