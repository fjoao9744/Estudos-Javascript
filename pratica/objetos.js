function Pessoa(nome) {
    this.nome = nome;
    this.atk = 5;
    this.hp = 20;
}

function ataque(enty) {
    enty.hp -= this.atk;
    console.log(`O ${this.nome} atacou ${enty.nome}`)
}

let pessoa1 = new Pessoa("joao");
let pessoa2 = new Pessoa("smogon");

pessoa1.atacar = ataque;
pessoa2.atacar = ataque;
pessoa2.atk = 3;

console.log(pessoa1.hp)
console.log(pessoa2.hp)

pessoa1.atacar(pessoa2);
pessoa2.atacar(pessoa1);

console.log(pessoa1.hp)
console.log(pessoa2.hp)
