// symbol

const id = Symbol("id");

const pessoa = {
    nome: "joao",
    [id]: 123
}

console.log(pessoa)