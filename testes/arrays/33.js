// desestruturação

const arr = [10, 25, 40, 50, 65];

const [n1, n2] = [arr.slice(0, 3), [...arr]]
const [n3, n4] = [arr.slice(0, 3), arr.slice(3)]
const [n5, n6] = [arr.slice(0, 3), arr]
const [n7, n8] = [[2, 4], ...arr]

console.log(n1, n2)
console.log(n3, n4)
console.log(n5, n6)
console.log(n7, n8)
