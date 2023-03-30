const fila = []
let escolha = ''

do {
    let pacientes = ''
    for (let i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + 'º - ' + fila[i] + '\n'
    }

    escolha = prompt(
        'Seja bem-vindo(a)! Esta é a atual fila de espera dos pacientes: \n' + 
        pacientes + 
        '\n\nEscolha uma opção: ' +
        '\na. Novo paciente' +
        '\nb. Consultar paciente' +
        '\nc. Sair')

    switch (escolha) {
        case 'a':
            const novoPaciente = prompt('Qual é o nome do paciente?')
            fila.push(novoPaciente)
            break
        case 'b':
            if (fila.length > 0) {
               alert('O paciente a ser consultado é: ' + fila[0])
                fila.shift()
            } else {
                alert('Não há pacientes na fila!')
            }
            break
        case 'c':
            alert('Encerrando programa')
            break
        default:
            alert('Opção inválida')
    }
} while (escolha !== 'c')