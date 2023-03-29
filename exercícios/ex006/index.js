let velocidade = 0

do {
    alert('A velocidade do veículo é ' + velocidade + ' km/h')
    velocidade -= 20
}   while (velocidade > 0) 

alert('Velocidade final: ' + velocidade + ' km/h') /* A velocidade final será -20km/h pois de qualquer forma o do while será executado */