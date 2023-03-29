let dinheiro = 0
let escolha = ''
quantia = prompt('Seja bem-vindo(a)!' + 
'\nInsira aqui a quantia inicial de dinheiro disponível')
dinheiro = parseFloat(quantia)

do {
    escolha = prompt('Saldo disponível: ' + dinheiro + 
    '\nEscolha uma opção: R$ ' + 
    '\na) Adicionar dinheiro' +
    '\nb) Remover dinheiro' +
    '\nc) Sair')

    switch (escolha) {
        case 'a':
            dinheiro += parseFloat ( prompt('Qual quantia deseja adicionar?') )
            break
        case 'b':
            dinheiro -= parseFloat (prompt('Qual quantia deseja remover?') )
            break
        case 'c':
            alert('Encerrando programa')
            break
        default:
            alert('Opção inválida')
    }
} while (escolha !== 'c')