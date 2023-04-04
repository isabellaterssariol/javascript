function dobro(x) {
    alert('O dobro de ' + x + ' é ' + (x * 2))
}

// dobro(5) //O parâmetro de entrada será 5 e consequentemente o alert dará 10 //
// dobro(7)

// dobro() // dará um problema pois não passamos nenhum valor > undefined e NaN (Not a Number) 

function dizerOla(nome = 'mundo') {
    alert('Olá, ' + nome + '!')
}

// dizerOla('Isaac')
// dizerOla()

function soma(a, b) {
    alert('O resultado da soma é ' + (a + b + c))
}

// soma(7, 6, 8)
//soma (1, 1, 60)

function criarUsuario(nome, email, senha, tipo = 'admin') {
    const usuario = {
        nome, // > mesmo que nome: nome
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

function novoUsuario(nome, tipo = 'admin', email, senha) {
    const usuario = {
        nome, // > mesmo que nome: nome
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

function muitosParametros(nome, telefone, endereço, aniversario, email, senha) {
    //..
} 

muitosParametros('nome', 'telefone', 'endereço', 'aniversario', 'email', 'senha')

// PARA FACILITAR TRANSFORME EM UM OBJETO:

function objetoComoParametro(usuario) {
    usuario.nome
    usuario.email
}

const dadosDoUsuario = {
    nome: '',
    telefone: '',
    endereço: '',
    aniversario: '',
    email: '',
    senha: ''
}

objetosComoParametro(dadosDoUsuario)

