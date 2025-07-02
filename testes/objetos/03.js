// declaração com funções construtoras e acessamento

function Pessoa(nome) {
    this.nome = nome;
    this.idade = 0;
}

pessoa = new Pessoa("joao");

console.log(pessoa.nome);
console.log(pessoa["nome"]);

console.log(pessoa.idade);

pessoa["idade"] = 18

console.log(pessoa.idade);
