// Optional Chaining

const obj = {
    nome: "joao",
    falar() {
        return "oi!"
    }
}

console.log(obj.falar?.())
console.log(obj.cantar?.()) // o metodo não existe, daria um erro
