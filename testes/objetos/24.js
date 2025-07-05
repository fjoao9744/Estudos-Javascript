// Optional Chaining

const obj = {
    nome: "joao",
    endereco: {
        cidade: "xique xique"
    }
}

console.log(obj.endereco?.cidade)
console.log(obj.endereco?.estado) // com o Optinional chaining n sobe um erro se o objeto n tiver aquele atributo, só retona undefined
