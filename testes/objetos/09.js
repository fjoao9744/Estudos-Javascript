// copiando

const obj = {
    nome: "joao",
    idade: 18
}

const copia = Object.assign({}, obj)
const copia2 = { ...obj }

console.log(copia, copia2)