// classes

class Pessoa {
    constructor(nome, idade, sexo = "") {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    falar() {
        console.log(`Ola! meu nome é ${this.nome}`)
    }
}

joao = new Pessoa("joao", 18)

console.log(joao)