let numeros = [
  34, 87, 12, 56, 43, 78, 91, 5, 67, 23,
  45, 89, 2, 37, 60, 18, 29, 71, 11, 8,
  50, 99, 14, 66, 74, 3, 39, 28, 62, 95,
  22, 7, 81, 49, 36, 55, 68, 13, 92, 1,
  19, 80, 41, 9, 64, 26, 4, 77, 16, 100
];

numeros2 = numeros.map(item => item * 2) // x2
pares = numeros.filter(item => item % 2 === 0) // só os pares
soma = numeros.reduce((acc, atual) => acc + atual) // soma tudo

console.log(numeros2)

console.log(pares)

console.log(soma)