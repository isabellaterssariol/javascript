const n1 = prompt('Qual o nome do personagem atacante?')
const poderdeataque = prompt('Qual o poder de ataque desse personagem?')

const n2 = prompt('Qual o nome do personagem defensor?')
let PontosDeVida = prompt('Qual a quantidade de pontos de vida desse personagem?')
const poderdedefesa = prompt('Qual o poder de defesa desse personagem?')
const escudo = prompt('Esse personagem tem um escudo? (Sim/Não)') 

const PoderDeAtaque = parseFloat(poderdeataque)
const PoderDeDefesa = parseFloat (poderdedefesa)
const dano1 = (PoderDeAtaque - PoderDeDefesa)
const dano2 = ((PoderDeAtaque - PoderDeDefesa)/2)
let danoCausado = 0


if ((PoderDeAtaque > PoderDeDefesa) && (escudo === 'Não' || escudo === 'não')) {
    danoCausado = dano1
} else if ((PoderDeAtaque > PoderDeDefesa) && (escudo === 'Sim' || escudo === 'sim')) {
    danoCausado = dano2
} else {
    danoCausado = 0
}

PontosDeVida -= danoCausado

alert(n1 + ' causou ' + danoCausado + ' pontos de dano em ' + n2)
alert(n1 + '\nPoder de ataque: ' + PoderDeAtaque + '\n\n' + n2 + '\nPontos de vida: ' + PontosDeVida + '\nPoder de defesa: ' + PoderDeDefesa + '\nPossui escudo: ' + escudo)



