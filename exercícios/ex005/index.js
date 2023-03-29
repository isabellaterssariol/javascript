let velocidade = 80

while (velocidade > 0) {
    alert('O carro está a ' + velocidade + ' km/h') 
    velocidade -= 20
    alert('Diminuindo 20 km/h')

    if (velocidade === 40) {
        break /* Aparecerá o alert abaixo e não aparecerá a velocidade 40km/h, apenas que diminuiu 20km/h*/
    }
}

alert('O carro parou.')