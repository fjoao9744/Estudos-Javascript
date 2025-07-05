// propriedades dinâmicas

let obj = {
    nome: "joao",
    idade: 18,
    sexo: "M"
}

console.log(obj)

obj = Object.entries(obj) // separando o objeto

console.log(obj)

let new_obj = {}

for (let i = 0; i < obj.length; i++) { // reconstruindo o objeto
    new_obj[obj[i][0]] = obj[i][1]
}

obj = new_obj

console.log(obj)
