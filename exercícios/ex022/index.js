const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle) 
    console.log(key, circle[key]); //irá mostrar chave e valor

for (let key of Object.keys(circle))
    console.log(key); //irá transformar em dois arrays com apenas as chaves

for (let entry of Object.entries(circle))
    console.log(entry); //irá transformar em dois arrays com tamanho 2 (cada um) contendo chave e valor


const another = Object.assign({}, circle);

//const another = {...circle }; -> forma mais simples

console.log(another)



