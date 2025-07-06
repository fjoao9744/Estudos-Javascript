// classes (herança)

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

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade); // super
        this.curso = curso;
    }
    estudar() {
        console.log(`${this.nome} esta estudando.`);
    }
}

let joao = new Estudante("joao", 18)

joao.falar()
joao.estudar()