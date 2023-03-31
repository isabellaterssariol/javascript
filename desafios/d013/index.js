let escolha = ''
const imoveis = []


do {
    escolha = prompt(
        'Seja bem-vindo(a)!' +
        '\nImóveis cadastrados: ' + 
        imoveis.length + 
        '\n\nEscolha uma opção: ' +
        '\na. Salvar novo imóvel' +
        '\nb. Mostrar imóveis salvos' +
        '\nc. Sair')

    switch (escolha) {
        case 'a':
            const novoimovel = {}

            novoimovel.proprietario = prompt('Qual o nome do proprietário?')
            novoimovel.quartos = parseFloat(prompt('Qual a quantidade de quartos?'))
            novoimovel.banheiros = parseFloat(prompt('Qual a quantidade de banheiros?'))
            novoimovel.garagem = prompt('Possui garagem?(Sim/Não)')

            const confirmacao = confirm(
            'Salvar este imóvel?\n' +
            '\nProprietário: ' + novoimovel.proprietario + 
            '\nQuartos: ' + novoimovel.quartos +
            '\nBanheiros : ' + novoimovel.banheiros + '\nPossui garagem? ' + novoimovel.garagem)

            if (confirmacao) {
                imoveis.push(novoimovel)
                alert('Imóvel salvo com sucesso')
            } else {
                alert('Voltando pro menu')
            }
            break
        case 'b':
            if (imoveis.length > 0) {
                for (let i = 0; i < imoveis.length; i++) {
                    alert(
                        'Imóvel ' + (i + 1) + 
                        '\nProprietário: ' + imoveis[i].proprietario + 
                        '\nQuartos: ' + imoveis[i].quartos +
                        '\nBanheiros: ' + imoveis[i].banheiros + 
                        '\nPossui garagem? ' + imoveis[i].garagem
                    )
                }
            } else {
                alert('Não há imóveis salvos')
            }
            break
            
            break
        case 'c':
            alert('Encerrando programa')
            break
        default:
            alert('Opção inválida')

        }
} while (escolha !== 'c')