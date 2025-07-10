class Pessoa {
    Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Animal {
    Animal(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }
}

joao = new Pessoa("joao", 18)
rex = new Animal("Rex", "dog")


console.log(joao instanceof Pessoa) // true
console.log(joao instanceof Animal) // false
console.log(rex instanceof Pessoa) // false
console.log(rex instanceof Animal) // true
