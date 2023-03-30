const numero = prompt('Insira aqui um número para obter sua tabuada')
let tabuada= ''

for (
    let fator = 1;
    fator <= 20;
    fator++) {
        tabuada += ' -> ' + numero + ' * ' + fator + ' = ' + (numero * fator) + '\n'
    }

    alert('Resultado da tabuada de ' + numero + ':\n\n' + tabuada) 