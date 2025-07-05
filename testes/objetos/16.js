// prototypes(herança)
// prototypes são configurações gerais de todas as instancias de uma classe

function Pessoa(nome = "") { // cria um objeto
    this.nome = nome;
}

Pessoa.prototype.falar = function () { // coloca uma função no objeto(que vai ser heradado de todas as instancias)
    console.log(`Ola!, meu nome é ${this.nome}`)
}

joao = new Pessoa("joao");

joao.falar();