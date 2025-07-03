// Object.assign()

const pessoa = {
    nome: "joao",
    idade: 18
}

const pessoa2 = {
    nome2: "smogon", // se for "nome" vai substituir pelo ja existente
    idade2: 17
}


const copia = {}

Object.assign(copia, pessoa, pessoa2) 

console.log(copia)
