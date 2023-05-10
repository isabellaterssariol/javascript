//Function Declaration
walk()

function walk() {
    console.log('walk');
}

//Function Expression
run (); //dá erro pois o JS executa as funções primeiro 

const run = function() {
    console.log('run')
};

function interest(principal, rate = 3.5, years= 5) {
    return principal * rate / 100 * years;
}

console.log(interest(1000))