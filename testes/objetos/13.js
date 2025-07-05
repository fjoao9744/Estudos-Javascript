// imutabilidade(seal)

const obj = {
    nome: "joao",
    idade: 18
}

console.log(obj)

Object.seal(obj) // congela só tamanho do objeto

obj.nome = "maria" // ✅
obj.idade = 19 // ✅
obj.sexo = "F" // ❌
delete obj.nome // ❌

console.log(obj)