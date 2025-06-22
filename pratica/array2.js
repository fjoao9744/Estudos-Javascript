const { pass } = require("three/tsl")

const notas = [
    {'joao': [2, 4, 9]}, 
    {'maria': [3, 5, 18]},
    {'ana': [10, 8, 7]},
    {'carlos': [5, 5, 5]},
    {'beatriz': [9, 9, 9]},
    {'lucas': [8, 6, 10]},
    {'fernanda': [7, 8, 10]},
    {'ricardo': [4, 4, 4]},
    {'patricia': [6, 7, 8]},
    {'gustavo': [10, 10, 10]}
]
let passados = {}

for (let c = 0; c < notas.length; c++) {
    aluno = notas[c]
    nome = Object.keys(aluno)[0]

    nota_final = aluno[nome].reduce((acc, atual) => acc + atual)

    if (nota_final >= 18) {
        passados[nome] = true
    } else {
        passados[nome] = false
    }


    console.log(aluno, nome, nota_final)
}

for (let c = 0; c < Object.keys(passados).length; c++) {
    nome = Object.keys(passados)[c]
    passou = Object.values(passados)[c]

    console.log(`${nome} - ${passou}`)

}

