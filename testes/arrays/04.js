// tirar/colocar itens

const numeros = [10, 20, 30, 40, 50, 60, 65, 70, 85, 90, 1000];

console.log(numeros);

n1 = numeros.pop(); // tira do final
n2 = numeros.shift() // tira do começo

console.log(numeros);

numeros.unshift(n1); // coloca no começo
numeros.push(n2); // coloca no final

console.log(numeros);