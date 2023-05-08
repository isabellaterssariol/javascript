console.log(isLandscape(900,1000))

function isLandscape(width, height) {
    return (width > height) ? 'Landscape' : 'Portrait'
} 

const output = fizzBuzz(7);
console.log(output)

function fizzBuzz(input) {
    if (typeof input !== 'number'){
        return NaN;
    } else if ((input % 3 === 0) && (input % 5 === 0)) {
        return 'FizzBuzz'
    } else if (input % 3 === 0) {
        return 'Fizz'
    } else if (input % 5 === 0) {
        return 'Buzz'
    } else {
        return input
    }
}

checkSpeed(71);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5

    if (speed <= speedLimit + kmPerPoint) {
        console.log('Ok')
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint)
        if (points >= 12) {
            console.log('License suspended')
        } else {
            console.log(points + ' points')
        }
    }
}


showNumbers(7)

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
        console.log(i, message);
    }
}

const array = [0, null, 2, 3, 5];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value)
        count++;
    }
    return count;
}


const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};
showProperties(movie)

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
            console.log(key,obj[key])
    }
}


console.log(sum(10));

function sum(limit) {
    let sum = 0

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        } 
    } return sum
}


const marks = [90, 90, 90]; 
console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calculateAverage(marks)
    if (average < 60) {
        return 'F'
    } else if (average < 70) {
        return 'D'
    } else if (average < 80) {
        return 'C'
    } else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array) {
        sum += value
    } return sum / array.length
}



showStars(10)



function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++) pattern += '*'
        console.log(pattern)
    } 
} //enviar para explicação


showPrimes(10)

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0)
            return false
    } return true
} //enviar para explicação