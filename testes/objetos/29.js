// propriedades dinâmicas

const obj = {}

for (let i = 0; i < 10; i++) {
    let propriedade = `propriedade${i}`
    obj[propriedade] = i ** 2
}

console.log(obj)