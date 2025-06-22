// spread

function soma(...numeros) {
    return numeros.reduce((acc, atual) => acc + atual);
}

console.log(soma(1, 3, 1, 5))


