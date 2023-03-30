const pilha = []
let escolha = ''

do {
    escolha = prompt(
        'Seja bem-vindo(a)!' +
        '\nCartas no baralho: ' + 
        pilha.length + 
        '\n\nEscolha uma opção: ' +
        '\na. Adicionar uma carta' +
        '\nb. Puxar uma carta' +
        '\nc. Sair')

        switch (escolha) {
            case 'a':
                const adicionarCarta = prompt('Qual carta você quer adicionar?')
                pilha.push(adicionarCarta)
                break
            case 'b':
                if (pilha.length > 0) {
                    const cartaPuxada = pilha.pop()
                    alert('Carta puxada: ' + cartaPuxada)
                } else {
                    alert('Não há cartas no baralho!')
                }
                break
            case 'c':
                alert('Encerrando programa')
                break
            default:
                alert('Opção inválida')
        }
} while (escolha !== 'c')
