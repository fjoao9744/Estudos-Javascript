// this

const obj = {
    nome: "joao",
    falar() {
        console.log(`Ola! meu nome é ${this.nome}`)
    }
}

obj.falar()