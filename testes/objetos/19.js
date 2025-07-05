// desestruturação

const obj = {
    nome: "joao",
    idade: 18,
    sexo: "M"
}

const {nome = "nenhum", profissão = "Desconhecida"} = obj;

console.log(nome, profissão)