const nome = prompt('Insira o primeiro nome do recruta')
const sobrenome = prompt('Insira o sobrenome do recruta')
const estudo = prompt('Qual é o campo de estudo do recruta?')
const ano = prompt('Qual é o ano de nascimento do recruta?')

parseFloat(ano)
const idade = 2023 - ano

alert(
    "Recruta cadastrado com sucesso!\n" + 
    "\nNome completo: " + nome + " " + sobrenome + 
    "\nCampo de estudo: " + estudo + 
    "\nIdade: " + idade)