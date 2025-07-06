// verificação

const obj = {
    nome: "joao",
    idade: 18
}

console.log("nome" in obj) // chave que existe
console.log(18 in obj) // só funciona com as chaves, não com os valores
console.log("joao" in obj) // valor que existe(false)
console.log("idade" in obj) // chave que existe
console.log("endereco" in obj) // chave que NÃO existe
