// every

const arr = [
    2, , 4, , 6, , 8, , 0, 12, 124,1442, 3464, 5686, 394
    ]

console.log(arr.every(event => event % 2 === 0)) // todos são pares?
console.log(arr.every(event => event % 10 === 0)) // todos são multiplos de 10?
