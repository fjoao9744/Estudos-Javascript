const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

num = numeros.filter(n => n % 2 === 0).map(n => n * 2).reduce((acc, atual) => acc + atual)

console.log(num)

