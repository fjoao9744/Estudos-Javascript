// desestruturação

const obj = {
    nome: "joao",
    idade: 18,
    sexo: "M",
    endereco: {cidade: "xique xique", estado: "bahia"}
}

const {nome, endereco: {estado}} = obj;

console.log(`${nome} mora em ${estado}`)
