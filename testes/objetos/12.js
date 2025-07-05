// imutabilidade(freeze)

const obj = {
    nome: "joao",
    idade: 18
}

console.log(obj)

Object.freeze(obj) // congela o objeto(não permite mais NENHUMA alteração)

obj.nome = "maria"
obj.idade = 19
obj.sexo = "F"

console.log(obj) // continua a mesma coisa