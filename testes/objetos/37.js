// defineProperty

const obj = {}

Object.defineProperty(obj, "nome", {
    value: "Joao",
    writable: false,
    configurable: false,
    enumerable: true
})

Object.defineProperty(obj, "idade", {
    value: 18,
    writable: true,
    configurable: false,
    enumerable: false
})

Object.defineProperty(obj, "sexo", {
    value: "M",
    writable: true,
    configurable: true,
    enumerable: true
})

console.log(obj) // não aparece a idade pq n é enumerable

obj.nome = "maria" // n é writable
delete obj.sexo

console.log(obj)
