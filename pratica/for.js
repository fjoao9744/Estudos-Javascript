const carrinho = [
    { nome: 'Camisa', preco: 50 },
    { nome: 'Calça', preco: 100 },
    { nome: 'Boné', preco: 30 }
];

const usuario = {
    nome: 'João',
    idade: 17,
    vip: true
};

console.log("Produtos:")
for (let produto of carrinho) console.log(`${produto.nome}: ${produto.preco}`)

console.log("Usuario:")
for (let data in usuario) console.log(`${data}: ${usuario[data]}`)
