const arr = new Array(50).fill(0).map(event => Math.floor(Math.random() * 100))

console.log(arr) // gera numeros aleatorios
console.log([...arr.keys()]) // indices
