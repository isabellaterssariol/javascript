const arr = ['Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Ginli']
console.log(arr)

// Adicionar Elementos //
// push - adicionar elemento no final do array e devolve//
let tamanho = arr.push('Boromir') 
console.log(arr)
console.log(tamanho) //* dessa forma podemos saber qual o novo tamanho da array *//

// unshift - adicionar elementos no início do array //
tamanho = arr.unshift('Boromir')
console.log(arr)
console.log(tamanho)

// Remover Elementos //
// pop - remove o último elemento do array e devolve ele
let ultimoElemento = arr.pop() 
console.log(arr)
console.log(ultimoElemento) //* dessa forma podemos saber qual foi o elemento retirado *//

// shift - remove o primeiro elemento do array e devolve ele
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um Elemento //
// includes - serve para saber se certo elemento existe no array e devolve valor booleano
const inclui = arr.includes('Gandalf, o Cinzento')
console.log(inclui)

// indexOf - pesquisar pelo índice
const indice = arr.indexOf('Gandalf')
console.log(indice)

// Cortar e Concatenar //
// slice - copia uma parte do array e coloca em um novo array
const hobbits = arr.slice(0, 4) //* não pega o índice 4. caso não for especificado o fim, pegará da frente até o fim *//
const outros = arr.slice(-4) //* o -1 é como se fosse o último índice do array *//
console.log(arr)
console.log(hobbits)

// concat - concatenar arrays
const sociedade = hobbits.concat(outros, 'Boromir') //* adicionou em uma variável o array hobbits + array outros + 'Boromir' *//

// Substituir elementos //
// * splice - remove um grupo de elementos do array e substituir esse grupo de elementos por outro e devolve ele em forma de lista dos elementos removidos, mesmo que seja apenas um elemento*//
const elementosRemovidos = sociedade.splice(indice, 1, 'Gandalf, o Cinzento', 1, 3)
console.log(sociedade)
console.log(elementosRemovidos) //* SUBSTITUIU EM TODOS *// 

// Iterar sobre os Elementos //
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + ' se encontra na posição ' + indice) //* mostrará o elemento e o índice de cada um *//
}