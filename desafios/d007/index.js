let escolha = ''

do {
    escolha = prompt('Seja bem-vindo(a)!' + '\nEscolha uma opção: ' + 
    '\na) Login' +
    '\nb) Cadastro' +
    '\nc) Suporte' +
    '\nd) Encerrar')

    switch (escolha) {
    case 'a':
        alert('Você escolheu a área de Login')
        break
    case 'b':
        alert('Você escolheu a área de Cadastro')
        break
    case 'c':
        alert('Você escolheu a área de Suporte')
        break
    case 'd':
        alert('O sistema está sendo encerrado.')
        break
    default:
        alert('Opção inválida')
    }
} while (escolha !== 'd')



