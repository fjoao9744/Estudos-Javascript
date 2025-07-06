// clonado(avançada)

const original = {
    nome: "joao",
    endereço: {
        cidade: "xique xique"
    }
}

const copia = structuredClone(original); // metodo correto
const copia2 = { ...original } // spread n clona objetos dentro de objeto

copia2.endereço.cidade = "Santos"
copia.endereço.cidade = "Salvador"

console.log(original, copia, copia2) // cidade do original vira da copia2