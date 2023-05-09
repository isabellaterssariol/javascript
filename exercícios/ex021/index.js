//Factory Functions notação camelo createCircle
function createCircle(radius) {
    return {
        radius, // o mesmo que radius: radius; //
        draw () {
            console.log('draw');
        }
    };
} //nessa sintaxe podemos ir mudando os argumentos

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2)

//Constructor Functions - notação pascal Circle
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    }
}

//const circle = new Circle(1)
//'new' criará um objeto vazio, em seguida chamará os parâmetros de this para ela e mudará no objeto

//Dynamic nature of objects
const circle = {
    radius: 1
};

circle.color = 'yellow'; //adicionando elementos
circle.draw = function() {}

delete circle.color; //removendo elementos
delete circle.draw;

console.log(circle)
