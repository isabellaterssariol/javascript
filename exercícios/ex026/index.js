//const numbers = arrayFromRange(1, 9);

//console.log(numbers);

//function arrayFromRange(min, max) {
//    const output = [];
//    for (let i = min; i <= max; i++)
//    output.push(i);
//    return output;
//} //retorna os valores a partir do mínimo até o máximo 


//const numbers = [1, 2, 3, 4, 5];

// console.log(includes(numbers, 5));

//function includes(array, searchElement) {
//    for (let element of array) {
//        if (element === searchElement)
//            return true;
//    } return false; 
//} // retorna true se o elemento conter no array ou false se não

//const numbers = [1, 2, 3, 4]

//const output = except(numbers, [1, 2])

//console.log(output);

//function except(array, excluded) {
//    const output = []
//    for (let element of array) {
//        if (!excluded.includes//(element)) 
//           output.push(element);
//    } return output
//} 

//const numbers = [1, 2, 3, 4];

//const output = move(numbers, 0, 1);

//console.log(output);

//function move(array, index, offset){
//    const position = index + //offset
 //   if (position >= array.//length || position < 0) {
//        console.error('Invalid //offset.')
//        return;
//    }
//
//    const output = [...array];
//    const element = output.splice(index, 1) [0]
 //   output.splice(index + offset, //0, element)
//    return output
//}

//const numbers = [1, 2, 3, 4, 1];

//const count = countOccurrences//(numbers, 1);


//console.log(count);

//function countOccurrences(array, //searchElement) {
//    let count = 0
//    for (let element of array) {
//        if (element === //searchElement) {
//            count ++
//        }
//    } return count
//}

const numbers = [1, 2, 3, 4];

const max = getMax([1, 2, 2, 1, 3]);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;

    let max = array[0];

    for (let i = 1; i < array.length; i++)
        if (array[i] > max)
            max = array[i];
    return max
}