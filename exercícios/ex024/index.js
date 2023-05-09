//let address = {
//    street: 'a',
//    city: 'b',
//    zipCode: 'c'
//};

//function showAddress(address) {
//    for (let key in address)
//        console.log(key, address[key]);
// }

function showAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let address = showAddress('Rua Joaquim Vilela', 'São Paulo', '04848-030')

console.log(address)



function ShowAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode
}

let NewAddress = new ShowAddress('Rua Joaquim Vilela', 'São Paulo', '04848-030')

console.log(NewAddress)




let address1 = new Address ('a','b', 'c');
let address2 = new Address ('a','b', 'c');

console.log(areEqual(address1, address2))
console.log(areSame(address1, address2))

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode
}

function areEqual(address1, address2){
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode
}

function areSame(address1, address2){
    return address1 === address2
}


//let post = {
//    title: 'a',
//    body: 'b',
//    author: 'c',
//   views: 100,
//   comments: [
//       { author: 'a', body: 'b'},
//        { author: 'c', body: 'd'}
//    ],
//    isLive: true
//};


let post = new Post('a', 'b', 'c');

console.log(post)

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false
}






