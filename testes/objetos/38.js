// verificação

const obj = {
    nome: "joao",
    idade: 18
};

console.log("toString" in obj)
console.log(Object.hasOwn(obj, "toString")) // mesma coisa que o obj.hasOwnProperty("toString"), só que mais seguro
