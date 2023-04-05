const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Map - serve para fazer transformação em array (pegar um array existente e criar um NOVO array em um novo baseado nele, por elemento do array)

// veja o uso de map sem usar ele propriamente: //
// const nomes = []
// for (let i = 0; i < personagens.length; i++) {
//   nomes.push(personagens[i].nome)} //

// console.log(nomes) transformamos um array de personagens em um de nomes //

const nomes = personagens.map(function (personagem) {
    return personagem.nome
})

console.log(nomes)

// Filter - Serve pra filtrar os elementos de um array, cria um novo array com elementos específicos

// veja o uso de filter sem usar ele propriamente: //
// const orcs = []

// for (let i = 0; i < personagens.length; i++) {
    // if (personagens[i].raca === 'Orc') {
//        orcs.push(personagens[i])}}


const orcs = personagens.filter(function (personagem) {
    return personagem.raca === 'Orc'
})

console.log(orcs) 

// Reduce - serve para transformar um array em algum outro elemento (como outro array, objeto, número, string)
const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel
}, 0) //valor inicial tem de ser 0//

console.log(nivelTotal) //os níveis serão somados

const racas = personagens.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
}, {}) //inicia como um objeto vazio//

console.log(racas)

// Sort - serve para ordenar arrays, mudar eles de posição de acordo com algum critério, ele vai modificar o PRÓPRIO array, NÃO VAI criar um novo

// o Sort irá fazer a comparação de dois em dois, por exemplo: 9, 1, 8, 7 > 1, 9, 8, 7 > 1, 8, 9, 7 > 1, 8, 7, 9 > 1, 7, 8, 9

const personagensOrdenados = personagens.slice().sort(function (a, b) {
    return a.nivel -  b.nivel // se (nivel de a > nivel b) der positivo, ele irá jogar o elemento pro fim do array, e se (nivel de b > nivel a) negativo irá jogar o elemento pro início do array
})

console.log(personagens)
console.log(personagensOrdenados) //o array personagem inicial não será ordenado, e o segundo array será criado de forma ordenada