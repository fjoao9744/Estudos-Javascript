// Optional Chaining

const loja = {
    produtos: [
        {
            nome: "arroz",
            preco: 10
        },
        {
            nome: "feijao",
            preco: 20
        }
    ]
}

console.log(loja.produtos[0].nome)
console.log(loja.produtos[4]?.nome) // daria erro se não tivesse o ?
