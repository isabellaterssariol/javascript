const nome = prompt('E aí, turista! Qual o seu nome?')
const cidade1 = prompt('Já visitou alguma cidade? (Sim/Não)')

let cidades = 0
let nomeDasCidades = ''

if (cidade1 === 'Sim') {
    cidades++
    const nomedacidade = prompt('Qual é o nome da cidade?')
    nomeDasCidades = nomeDasCidades + '\n- ' + nomedacidade + '\n'
    let cidade2 = prompt('Já visitou mais cidades? (Sim/Não)')
    
    while (cidade2 === 'Sim') {
        cidades++
        let nomedacidade2 = prompt('Qual o nome da cidade?')
        nomeDasCidades = nomeDasCidades +  "- " + nomedacidade2 + '\n'
        cidade2 = prompt('Já visitou mais cidades? (Sim/Não)')
    } 
} else {
    alert('Nome do turista: '+ nome + '\nQuantas cidades visitou: ' + cidades + '\nQuais cidades visitou: Não visitou nenhuma cidade')
}

if (cidades != 0) {
    alert('Nome do turista: ' + nome + '\nQuantas cidades visitou: ' + cidades + '\nQuais cidades visitou: ' + nomeDasCidades)
}
