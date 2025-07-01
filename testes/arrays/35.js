// desestruturação

const arr = [10, 25, 30, 40, 55]

const [primeiro, ...resto] = arr
const [metade1, metade2] = [arr.slice(0, arr.length / 2), arr.slice(arr.length / 2)]

console.log(primeiro, resto)
console.log(metade1, metade2)
