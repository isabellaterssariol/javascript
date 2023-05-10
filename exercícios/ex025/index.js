const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b' },
]

                        
const course = courses.find(course => course.name === 'a');

console.log(course)



//const numbers = [1, 2, 3, 4];

//numbers.splice(2, 2); //remove dois elementos a partir do índice 2
//console.log(numbers);

//let numbers = [1, 2, 3, 4];
// let another = numbers;

// numbers.splice(0, numbers.length)

// const first = [1, 2, 3]
//const second = [4, 5, 6]

//const combined = [...first, //'a', ...second, 'b'] // copiamos os arrays first e second completos e adicionamos as strings 'a' e 'b'

//const copy = [...combined]; //copiando o array completo

//const numbers = [1, 2, 3];
//const joined = numbers.join (',');
//console.log(joined); //ira adicionar uma vírgula em cada elemento e transformá-lo em apenas um 

//const message = 'This is my first //message';
//const parts = message.split (' ');
//console.log(parts); // irá separar as palavras em 5 arrays

//const combined = parts.joins('-');
//console.log(combined) // irá juntar as palavras em um array unidas por -

const numbers = [2, 3 , 1];
numbers.sort();
console.log(numbers); // irá retornar os números de forma ordenada 

numbers.reverse();
console.log(numbers); // irá retornar os números de forma inversa


const number = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

console.log(filtered)