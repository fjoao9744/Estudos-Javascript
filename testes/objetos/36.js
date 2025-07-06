// defineProperty

const obj = {};

Object.defineProperty(obj, "nome", {
    value: "joao",
    enumerable: true, // aparece no for...in (tambem define se pode ou não aparecer no terminal)
    writable: false, // pode ser sobrescrito
    configurable: false // pode ser apagado
})

obj.nome = "maria" // não permite alteração
delete obj.nome // não pode ser apagado

console.log(obj)

