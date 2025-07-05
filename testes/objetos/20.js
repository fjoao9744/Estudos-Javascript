// desestruturação

const obj = {
    nome: "joao",
    idade: 14,
    sexo: "M"
}

function verficar_idade({idade}) {
    if (idade >= 18) {
        console.log('você é maior de idade')
    } else {
        console.log("você é menor de idade")
    }
}

verficar_idade(obj)
