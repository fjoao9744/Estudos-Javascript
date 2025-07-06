// verificação

const obj = {
    nome: "joao",
    idade: 18
}

console.log("nome" in obj)
console.log("toString" in obj)
console.log(obj.hasOwnProperty("nome"))
console.log(obj.hasOwnProperty("toString")) // não verifica heranças
