let pessoa = {
    nome: 'Isaac',
    idade: 26,
    dizerOla() {
        console.log('Olá, mundo! Meu nome é ' + this.nome) // 'this' referencia a chaves no mesmo contexto //
    }
}

console.log(pessoa)

pessoa.dizerOla()