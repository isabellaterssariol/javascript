const vei1 = prompt("Qual é o nome do primeiro veículo?")
const vel1 = prompt("Qual a velocidade do primeiro veículo?")

const vei2 = prompt("Qual é o nome do segundo veículo?")
const vel2 = prompt("Qual a velocidade do segundo veículo?")

if (vel1 > vel2) {
    alert('O veículo ' + vei1 + 'é mais rápido do que' + vei2)
} else if (vel1 === vel2) {
    alert('As velocidades dos veículos ' + vei1 + vei2 + 'são iguais!')
} else {
    alert('O veículo ' + vei2 + 'é mais rápido do que' + vei1)
}