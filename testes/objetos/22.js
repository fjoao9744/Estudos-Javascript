// desestruturação

const obj = {
    nome: "joao",
    idade: 18,
    sexo: "M"
}

const {nome, ...resto} = obj

console.log(nome, resto)