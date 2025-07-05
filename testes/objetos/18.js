// desestruturação

const obj = {
    nome: "joao",
    idade: 18,
    sexo: "M"
}

const {nome: nomeObj, idade: idadeObj} = obj; // vc pode renomear assim

console.log(nomeObj, idadeObj)